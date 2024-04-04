import { LucideProps, MessageSquare, User } from "lucide-react";

export const Icons = {
  user: User,
  logo: (props: LucideProps) => (
    <svg
      width="36"
      height="32"
      viewBox="0 0 36 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.5 15C35.5 24.3888 27.3888 32 18 32C8.61112 32 0.999966 24.3888 0.999966 15C0.999966 5.61116 -0.888841 0 8.5 0C17.8888 0 35.5 5.61116 35.5 15Z"
        fill="black"
      />
      <path
        d="M17.106 18.504C16.82 19.0173 16.424 19.4097 15.918 19.681C15.4193 19.9523 14.8473 20.088 14.202 20.088C13.4613 20.088 12.8233 19.934 12.288 19.626C11.76 19.318 11.353 18.878 11.067 18.306C10.781 17.7267 10.638 17.0373 10.638 16.238C10.638 15.4167 10.7957 14.6943 11.111 14.071C11.4263 13.4477 11.8663 12.96 12.431 12.608C12.9957 12.256 13.6483 12.08 14.389 12.08C14.9977 12.08 15.533 12.2047 15.995 12.454C16.4643 12.7033 16.8383 13.07 17.117 13.554L16.457 14.049C16.017 13.257 15.3203 12.861 14.367 12.861C13.8023 12.861 13.3037 13.004 12.871 13.29C12.4457 13.576 12.112 13.972 11.87 14.478C11.628 14.984 11.507 15.5707 11.507 16.238C11.507 17.206 11.7417 17.9613 12.211 18.504C12.6877 19.0393 13.3513 19.307 14.202 19.307C15.2433 19.307 15.995 18.8743 16.457 18.009L17.106 18.504ZM19.9158 12.916H16.2308V15.666H19.8168V16.392H16.2308V19.274H20.0698L20.0038 20H15.3948V12.19H19.9158V12.916ZM17.8286 20L21.0736 12.19H21.8106L24.9236 20H24.0656L23.2516 17.91H19.5446L18.6976 20H17.8286ZM19.8306 17.195H22.9766L21.4366 13.235L19.8306 17.195Z"
        fill="white"
      />
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  ),
  commentReply: MessageSquare,
};
