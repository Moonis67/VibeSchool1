import { toast as sonnerToast } from "sonner";

type ToastOptions = Parameters<typeof sonnerToast.success>[1];

// Demo-friendly notifications: show celebrations only. Operational errors and
// background updates stay in the console so they never interrupt the user.
const silentToast = () => undefined as unknown as string;

export const toast = {
  success: (message: string, options?: ToastOptions) =>
    sonnerToast.success(`🎉 ${message}`, { ...options, icon: options?.icon || "✨" }),
  error: silentToast,
  warning: silentToast,
  warn: silentToast,
  info: silentToast,
  message: silentToast,
  dismiss: sonnerToast.dismiss,
};
