import { onLoginUser } from "@/actions/auth/index";
import SideBar from "@/components/sidebar/index";
import { ChatProvider } from "@/context/use-chat-context";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const OwnerLayout = async ({ children }: Props) => {
  const authenticated = await onLoginUser();
  if (!authenticated) return null;
  return (
    <ChatProvider>
      <div className="flex h-screen w-full">
        <SideBar domains={authenticated.domain} />
        <div className="w-full h-screen flex flex-col pl-20 md:pl-4">
          {children}
        </div>
      </div>
    </ChatProvider>
  );
};

export default OwnerLayout;
