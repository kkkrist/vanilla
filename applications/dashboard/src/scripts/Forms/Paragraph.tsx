import React from "react";
import classNames from "classnames";
import { uniqueIDFromPrefix, getOptionalID, IOptionalComponentID } from "@core/Interfaces/componentIDs";

interface IProps extends IOptionalComponentID {
    className?: string;
    isError?: boolean;
    content?: string | Node | null;
}

export default class Paragraph extends React.Component<IProps> {
    public static defaultProps = {
        id: false,
    };

    public id: string;

    constructor(props) {
        super(props);
        this.id = getOptionalID(props, "Paragraph") as string;
    }

    public render() {
        if (this.props.content) {
            const componentClasses = classNames({ isError: this.props.isError }, this.props.className);

            let accessibilityProps = {};

            if (this.props.isError) {
                accessibilityProps = {
                    "aria-live": "assertive",
                    role: "alert",
                };
            }

            return (
                <p id={this.id} className={componentClasses} {...accessibilityProps}>
                    {this.props.content}
                </p>
            );
        } else {
            return null;
        }
    }
}
