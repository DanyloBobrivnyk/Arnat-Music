import {twMerge} from "tailwind-merge";

interface LabelProps {
    content: string | null | undefined;
}

const Label = ({ content } : LabelProps) => {
    const color = {
        green: "text-emerald-700",
        blue: "text-blue-600",
        orange: "text-orange-700",
        purple: "text-purple-600",
        pink: "text-pink-600"
    };
    const bgcolor = {
        green: "bg-emerald-50",
        blue: "bg-blue-50",
        orange: "bg-orange-50",
        purple: "bg-purple-50",
        pink: "bg-pink-50"
    };


    return (
        <span
            className={twMerge(
                "inline-block text-xs font-medium tracking-wider uppercase ",
                " mt-5",
                color.orange
            )}>
      {content}
    </span>
    );

}

export default Label;
