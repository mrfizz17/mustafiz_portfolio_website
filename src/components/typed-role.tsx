"use client";

import { useEffect, useState } from "react";

type TypedRoleProps = {
  roles: string[];
};

export default function TypedRole({ roles }: TypedRoleProps) {
  const [text, setText] = useState(roles[0] ?? "");

  useEffect(() => {
    if (roles.length === 0) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let roleIndex = 0;
    let charIndex = roles[0].length;
    let deleting = false;
    let timer = 0;

    const tick = () => {
      const word = roles[roleIndex];

      if (!deleting) {
        charIndex += 1;
        setText(word.slice(0, charIndex));

        if (charIndex >= word.length) {
          deleting = true;
          timer = window.setTimeout(tick, 1500);
          return;
        }

        timer = window.setTimeout(tick, 70);
        return;
      }

      charIndex -= 1;
      setText(word.slice(0, charIndex));

      if (charIndex <= 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        timer = window.setTimeout(tick, 300);
        return;
      }

      timer = window.setTimeout(tick, 35);
    };

    timer = window.setTimeout(tick, 1800);

    return () => window.clearTimeout(timer);
  }, [roles]);

  return (
    <p className="role" aria-label={roles[0]}>
      <span aria-hidden="true">{text}</span>
      <i aria-hidden="true" />
    </p>
  );
}
