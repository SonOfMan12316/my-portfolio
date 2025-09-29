import { toast as baseToast, ToastOptions } from "react-hot-toast";
import { HiCheckCircle, HiInformationCircle, HiRefresh } from "react-icons/hi";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { mergeClassNames } from "@/utils/classNames";

const typeStyles: Record<string, string> = {
  success:
    "border-[var(--color-foreground)]/25 bg-transparent backdrop-blur-3xl",
  error: "border-[var(--color-foreground)]/25 bg-transparent backdrop-blur-3xl",
  loading:
    "border-[var(--color-foreground)]/25 bg-transparent backdrop-blur-3xl",
  info: "border-[var(--color-foreground)]/25 bg-transparent backdrop-blur-3xl",
};

const typeIcons: Record<string, React.ReactNode> = {
  success: <HiCheckCircle size={24} className="text-green-400" />,
  error: <BsFillExclamationTriangleFill size={24} className="text-red-400" />,
  loading: <HiRefresh size={24} className="animate-spin text-green-400" />,
  info: <HiInformationCircle size={24} className="text-blue-400" />,
};

function showToast(
  type: "success" | "error" | "info" | "loading",
  message: string,
  options?: ToastOptions
) {
  return baseToast.custom(
    (t) => (
      <div
        className={mergeClassNames(
          "flex items-center gap-3",
          "rounded-lg shadow-md p-2 px-4 w-full max-w-sm border-2",
          t.visible ? "animate-enter" : "animate-leave",
          typeStyles[type]
        )}
        onClick={() => baseToast.dismiss(t.id)}
      >
        <div className="min-w-6 h-min-w-6 flex items-center justify-center flex-shrink-0">
          {typeIcons[type]}
        </div>
        <div className="text-sm font-medium my-1">{message}</div>
        <button
          onClick={() => baseToast.dismiss(t.id)}
          className="ml-auto text-xs text-gray-200 mt-1"
          aria-label="Close notification"
        >
          <IoCloseSharp size={24} />
        </button>
      </div>
    ),
    options
  );
}

export const Toast = {
  success: (msg: string, opts?: ToastOptions) =>
    showToast("success", msg, opts),
  error: (msg: string, opts?: ToastOptions) => showToast("error", msg, opts),
  info: (msg: string, opts?: ToastOptions) => showToast("info", msg, opts),
  loading: (msg: string, opts?: ToastOptions) =>
    showToast("loading", msg, opts),
};
