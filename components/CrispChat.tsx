"use client";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("202ff417-e65a-42e7-8f7f-797be92ad4fd");
  }, []);

  return null;
};