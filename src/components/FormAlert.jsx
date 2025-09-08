import React, { useEffect } from "react";
import { CheckCircle, XCircle } from "lucide-react";

/**
 * Props:
 * - kind: "success" | "error"
 * - children: message text
 * - onClose?: () => void  (optional auto-dismiss button/hook)
 * - autoHideMs?: number   (e.g., 6000)
 */
export default function FormAlert({ kind = "success", children, onClose, autoHideMs }) {
  useEffect(() => {
    if (!autoHideMs || !onClose) return;
    const id = setTimeout(onClose, autoHideMs);
    return () => clearTimeout(id);
  }, [autoHideMs, onClose]);

  const Icon = kind === "success" ? CheckCircle : XCircle;

  return (
    <div
      className={`alert ${kind === "success" ? "alert-success" : "alert-error"}`}
      role="status"
      aria-live={kind === "success" ? "polite" : "assertive"}
    >
      <Icon size={20} aria-hidden="true" />
      <span className="alert-text">{children}</span>

      {onClose && (
        <button className="alert-close" type="button" onClick={onClose} aria-label="Dismiss message">
          ×
        </button>
      )}
    </div>
  );
}
