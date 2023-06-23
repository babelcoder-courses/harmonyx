"use client";

import { ReactNode } from "react";
import { UserRole } from "../types";
import { useAppStore } from "../../store";

export interface ProtectedResourceProps {
  role?: UserRole;
  children: ReactNode;
}

const ProtectedResource = ({ role, children }: ProtectedResourceProps) => {
  const { profile } = useAppStore((state) => state.auth);

  if (!profile) return null;
  if (role && role !== profile.role) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedResource;
