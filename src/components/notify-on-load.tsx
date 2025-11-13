"use client";

import { useEffect } from "react";
import { notifyLong } from "../lib/utils";

export function NotifyOnLoad() {
  useEffect(() => {
    notifyLong();
  }, []);

  return null;
}

