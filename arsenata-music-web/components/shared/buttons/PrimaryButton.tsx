"use client"

import React from "react";
import Image from "next/image";
import {PrimaryButtonProps} from "@/types";

const PrimaryButton = ({title, containerStyles, handleClick} : PrimaryButtonProps) => {
    return (
        <button
            disabled={false}
            type={"button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1`}>
                {title}
            </span>
        </button>
    )
}

export default PrimaryButton;
