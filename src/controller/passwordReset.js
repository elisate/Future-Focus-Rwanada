import crypto from "crypto";
import bcrypt from "bcryptjs";
import User from "../model/useModal.js"; // Your user model
import sendEmail from "../../utils/sendemail.js";

// Function to request a password reset
export const requestPasswordReset = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Generate a reset token
    const resetToken = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // Token valid for 1 hour

    await user.save();

    // Create the reset link
    const resetLink = `https://future-focus-rwanda-elearning-platform.vercel.app/reset-password/${resetToken}`;

    // Send email
    const subject = "Password Reset Request";
    const htmlContent = `<p>You requested a password reset. Click the link below to reset your password:</p>
                         <a href="${resetLink}">Reset Password</a>`;

    const emailSent = await sendEmail(user.email, subject, htmlContent);

    if (emailSent) {
      return res.status(200).json({
        success: true,
        message: "Password reset link sent to your email.",
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Failed to send email. Please try again later.",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }, // Check if token is still valid
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Password reset token is invalid or has expired.",
      });
    }

    // Hash the new password before saving
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    // Clear the reset token and expiry
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    // Send confirmation email
    const subject = "Your Password Has Been Reset";
    const htmlContent = `<p>Your password has been reset successfully. If you did not request this change, please contact support.</p>`;

    await sendEmail(user.email, subject, htmlContent);

    return res.status(200).json({
      success: true,
      message: "Password has been reset successfully.",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};
