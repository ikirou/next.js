import { MouseEventHandler } from "react";

function custom_button({
  class_style,
  title,
  HandleSubmit,
}: {
  class_style: string;
  title: string;
  HandleSubmit?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button type="submit" className={class_style} onClick={HandleSubmit}>
      {title}
    </button>
  );
}

export default custom_button;
