import React, { FC, ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  StyledCollapsible,
  StyledCollapsibleHeader,
  StyledCollapsibleContent,
} from "./StyledCollapsible";

interface ICollapsibleProps {
  id: number;
  name: string;
  age: number;
  nationality: string;
  privacyRisk: number;
  expanded: false | number;
  setExpanded(val: false | number): void;
}

export const Collapsible: FC<ICollapsibleProps> = ({
  id,
  name,
  age,
  nationality,
  privacyRisk,
  expanded,
  setExpanded,
}): ReactElement => {
  const isOpen = id === expanded;

  return (
    <StyledCollapsible>
      <StyledCollapsibleHeader onClick={() => setExpanded(isOpen ? false : id)}>
        <p>{name}</p>
        <span>{isOpen ? "-" : "+"}</span>
      </StyledCollapsibleHeader>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <StyledCollapsibleContent>
              <div>
                <p>Age:</p>
                <span>{age}</span>
              </div>
              <div>
                <p>Nationality:</p>
                <span>{nationality}</span>
              </div>
              <div>
                <p>Privacy Risk:</p>
                <span>{privacyRisk}%</span>
              </div>
            </StyledCollapsibleContent>
          </motion.section>
        )}
      </AnimatePresence>
    </StyledCollapsible>
  );
};
