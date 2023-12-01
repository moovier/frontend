import * as React from "react";
import "./index.less";

interface Props {
  children: any;
  image_path: string;
}

const BackdropWrapper: React.FC<Props> = ({ children, image_path }: Props) => (
  <div
    className="gradient-background"
    // style={{ backgroundImage: `url(${image_path})` }}
  >
    {/* Content wrapper */}
    <div className="overlay">{children}</div>
  </div>
);

export default BackdropWrapper;
