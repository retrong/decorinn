import classnames from "classnames";
import { ArrowRight } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outlined" | "text";
  size?: "small" | "medium" | "large";
}
export default function ButtonCustom(props: IButtonProps) {
  const {
    variant = "solid",
    className,
    children,
    disabled,
    size = "medium",
    ...rest
  } = props;
  return (
    <button
      className={classnames(
        "p-2 rounded-full flex items-center gap-2 transition-all duration-300 group hover:text-black",
        className,
        {
          "bg-primary/80 text-white group-hover:text-black hover:bg-white": variant === "solid",
          "bg-green-light-xx border text-primary hover:border-primary/90 hover:bg-grey-200":
            variant === "outlined",
          "bg-transparent text-primary border-none !p-0 hover:bg-grey-200":
            variant === "text",
          "cursor-not-allowed opacity-50": disabled,
          "cursor-pointer": !disabled,
          "text-sm p-1.5": size === "small",
          "text-base": size === "medium",
          "text-lg": size === "large",
        }
      )}
      disabled={disabled}
      {...rest}
    >
      {children}{" "}
      <span className="p-2 ml-3 rounded-full bg-[#391b19] -rotate-45 group-hover:rotate-0 group-hover:bg-white transition-all duration-300">
        <ArrowRight className="group-hover:text-black" />
      </span>
    </button>
  );
}
