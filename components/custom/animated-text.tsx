"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

type Props = { text: string; fontSize: string; bold?: boolean };

const colors = [
  "IndianRed",
  "DarkSalmon",
  "LightSalmon",
  "Crimson",
  "firebrick",
  "darkred",
  "DeepPink",
  "MediumVioletRed",
  "Tomato",
  "OrangeRed",
  "Orange",
  "LightYellow",
  "LemonChiffon",
  "PapayaWhip",
  "Moccasin",
  "Gold",
  "Khaki",
  "lavender",
  "PaleGoldenrod",
  "Darkkhaki",
  "Thistle",
  "Orchid",
  "Magenta",
  "MediumPurple",
  "DarkOrchid",
  "Indigo",
  "MediumSlateBlue",
  "LawnGreen",
  "LimeGreen",
  "Lime",
];

const AnimatedText = (props: Props) => (
  <div className="flex justify-center items-center">
    {props.text.split("").map((char) => {
      return (
        <motion.div
          key={crypto.randomUUID()}
          initial={{ color: "lightsalmon" }}
          whileHover={{
            scale: 1.2,
            color: colors[Math.floor(Math.random() * colors.length)],
          }}
        >
          {char !== " " ? (
            <h1 className={cn(props.fontSize, props.bold ? "font-bold" : "")}>
              {char}
            </h1>
          ) : (
            <h1
              className={cn(
                "text-5xl opacity-0",
                props.fontSize,
                props.bold ? "font-bold" : "",
              )}
            >
              A
            </h1>
          )}
        </motion.div>
      );
    })}
  </div>
);

export default AnimatedText;
