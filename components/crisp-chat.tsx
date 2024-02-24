"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("d12ccc6a-aee8-4c32-90a8-6bcf30aa78f4");
  }, []);

  return null;
};
