import Progress from "../model/progressModal.js";

// Update progress function
export const updateProgress = async (req, res) => {
  const {
    studentId,
    courseId,
    videoProgress = 0,
    documentProgress = 0,
    contentProgress = 0,
  } = req.body;

  try {
    let progress = await Progress.findOne({ studentId, courseId });

    if (!progress) {
      // If progress doesn't exist, create a new one
      progress = new Progress({
        studentId,
        courseId,
        videoProgress,
        documentProgress,
        contentProgress,
        overallProgress:
          (videoProgress + documentProgress + contentProgress) / 3, // Calculate overall progress as a percentage
      });
    } else {
      // If it exists, update the progress
      progress.videoProgress = videoProgress || progress.videoProgress;
      progress.documentProgress = documentProgress || progress.documentProgress;
      progress.contentProgress = contentProgress || progress.contentProgress;

      // Calculate the new overall progress
      const totalProgress =
        (progress.videoProgress +
          progress.documentProgress +
          progress.contentProgress) /
        3;

      // Ensure overallProgress is set to 100% if all components are 100%
      progress.overallProgress = totalProgress > 99.9 ? 100 : totalProgress;
    }

    await progress.save();
    res.status(200).json(progress);
  } catch (error) {
    console.error("Error updating progress:", error);
    res
      .status(500)
      .json({ message: "An error occurred while updating progress." });
  }
};

// Endpoint to get student progress for a course
export const getProgress = async (req, res) => {
  const { studentId, courseId } = req.params;

  try {
    const progress = await Progress.findOne({ studentId, courseId });
    if (!progress) {
      return res.status(404).json({ message: "Progress not found." });
    }

    res.status(200).json(progress);
  } catch (error) {
    console.error("Error retrieving progress:", error);
    res
      .status(500)
      .json({ message: "An error occurred while retrieving progress." });
  }
};
