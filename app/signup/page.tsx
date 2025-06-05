"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpPage() {
  const router = useRouter();
  const { signIn } = useAuthActions();
  const [flow, setFlow] = useState<"signIn" | "signUp">("signUp");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  //   For password text visibility
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void signIn("password", {
      email: formData.email,
      password: formData.password,
      flow,
    })
      .catch((error) => {
        setError(error.message);
      })
      .then(() => {
        router.push("/");
      });
  };

  return (
    <div className="flex justify-center items-center py-[10px] px-200 gap-[10px] w-full h-screen">
      {/* Page Content */}
      <div className="py-600 px-200 flex flex-col justify-center items-start rounded-12 border border-neutral-200 bg-white md:w-[522px] md:px-400 md:shrink-0 shadow-[0px_8px_12px_0px_rgba(240,240,240,0.60)] 2xl:w-[540px]">
        {/* Logo Wrapper */}
        <div className="flex pb-2 flex-col items-center self-stretch gap-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="95"
            height="28"
            fill="none"
            viewBox="0 0 95 28"
          >
            <g clipPath="url(#a)">
              <g
                fill="#335CFF"
                fillRule="evenodd"
                clipPath="url(#b)"
                clipRule="evenodd"
              >
                <path d="M27.4 2.158C26.367.192 22.974.81 20.04 1.595 7.291 6.294 2.781 15.842 1.196 21.53a1.051 1.051 0 0 0-.13.482c-.628 2.413-.713 4.022-.714 4.075a1.048 1.048 0 0 0 1.003 1.09c.016.002.031.002.047.002.558 0 1.023-.441 1.048-1.005.007-.171.072-1.346.468-3.101 3.511-.149 7.046-1.456 10.518-3.898a1.05 1.05 0 0 0 .049-1.681l-1.602-1.269 5.256-.515c.214-.02.416-.106.58-.246a79.991 79.991 0 0 0 5.333-5.056c3.872-4.06 5.211-6.604 4.348-8.25ZM21.178 25.08h-8.974a1.05 1.05 0 0 0 0 2.1h8.974a1.05 1.05 0 0 0 0-2.1Z" />
              </g>
              <path
                fill="#0E121B"
                d="M43.336 23.615c-.567 0-.974-.123-1.219-.368-.245-.26-.368-.744-.368-1.449 0-.475.046-1.05.138-1.725.092-.675.253-1.694.483-3.059l.368-2.231c.215-1.319.406-2.699.575-4.14.153-1.227.23-2.147.23-2.76 0-.69-.253-1.035-.759-1.035-.383 0-.866.207-1.449.621-.567.399-1.18 1.043-1.84 1.932-.215.291-.452.437-.713.437-.215 0-.406-.1-.575-.299a1.2 1.2 0 0 1-.23-.713c0-.26.046-.506.138-.736.092-.245.26-.537.506-.874.751-1.027 1.587-1.817 2.507-2.369.92-.567 1.886-.851 2.898-.851.843 0 1.472.26 1.886.782.43.521.644 1.28.644 2.277 0 .89-.123 2.177-.368 3.864.767-2.27 1.74-3.987 2.921-5.152 1.18-1.18 2.568-1.771 4.163-1.771 1.257 0 2.2.36 2.829 1.081.644.705.966 1.656.966 2.852 0 .675-.1 1.495-.299 2.461l-1.403 6.578c-.153.767-.23 1.426-.23 1.978 0 .644.146 1.127.437 1.449.307.322.728.483 1.265.483.506 0 .997-.169 1.472-.506.49-.337 1.066-.897 1.725-1.679.184-.215.391-.322.621-.322.2 0 .353.092.46.276.123.184.184.437.184.759 0 .598-.146 1.073-.437 1.426-.797.966-1.587 1.671-2.369 2.116a4.907 4.907 0 0 1-2.461.667c-1.303 0-2.323-.383-3.059-1.15-.736-.782-1.104-1.825-1.104-3.128 0-.506.038-1.058.115-1.656.092-.598.238-1.357.437-2.277l.92-4.209.161-.736c.077-.353.138-.682.184-.989.046-.322.069-.636.069-.943 0-.49-.138-.882-.414-1.173-.276-.291-.667-.437-1.173-.437-.92 0-1.84.49-2.76 1.472-.92.981-1.771 2.568-2.553 4.761-.782 2.177-1.395 4.968-1.84 8.372-.107.782-.268 1.326-.483 1.633-.2.307-.598.46-1.196.46Zm27.365-7.176c.2 0 .353.1.46.299.108.2.161.452.161.759 0 .736-.222 1.173-.667 1.311-.92.322-1.932.506-3.036.552-.291 1.288-.866 2.323-1.725 3.105-.859.767-1.832 1.15-2.92 1.15-.92 0-1.71-.222-2.37-.667a4.268 4.268 0 0 1-1.472-1.771 5.672 5.672 0 0 1-.506-2.392c0-1.165.223-2.2.667-3.105.445-.92 1.058-1.633 1.84-2.139a4.585 4.585 0 0 1 2.6-.782c1.164 0 2.1.406 2.805 1.219.72.797 1.142 1.786 1.265 2.967.72-.046 1.58-.2 2.576-.46.123-.03.23-.046.322-.046Zm-7.544 4.738c.49 0 .913-.2 1.265-.598.368-.399.614-.974.736-1.725a3.265 3.265 0 0 1-1.104-1.265 3.842 3.842 0 0 1-.368-1.656c0-.245.023-.49.07-.736h-.116c-.613 0-1.127.299-1.54.897-.4.583-.599 1.41-.599 2.484 0 .843.161 1.487.483 1.932.337.445.728.667 1.173.667Zm16.573-2.806c.2 0 .353.092.46.276.123.184.184.437.184.759 0 .613-.146 1.089-.437 1.426a9.782 9.782 0 0 1-2.162 2.001c-.782.521-1.679.782-2.69.782-3.129 0-4.693-2.2-4.693-6.601 0-.675.023-1.357.07-2.047h-.898c-.46 0-.774-.084-.943-.253-.153-.169-.23-.437-.23-.805 0-.859.345-1.288 1.035-1.288h1.311c.26-1.687.66-3.228 1.196-4.623.537-1.395 1.18-2.507 1.932-3.335.767-.828 1.587-1.242 2.461-1.242.644 0 1.15.284 1.518.851.368.567.552 1.28.552 2.139 0 2.377-.997 4.447-2.99 6.21h2.576c.245 0 .422.054.53.161.106.107.16.307.16.598 0 1.058-.866 1.587-2.599 1.587h-2.806c-.03.767-.046 1.365-.046 1.794 0 1.595.184 2.714.552 3.358.383.644.981.966 1.794.966.66 0 1.242-.2 1.748-.598.506-.399 1.104-.997 1.794-1.794.184-.215.391-.322.621-.322ZM75.705 5.629c-.23 0-.49.291-.782.874-.276.567-.544 1.365-.805 2.392a33.648 33.648 0 0 0-.62 3.381c.904-.782 1.578-1.656 2.023-2.622.46-.981.69-1.87.69-2.668 0-.905-.169-1.357-.506-1.357ZM88.3 18.371c.2 0 .353.092.46.276.123.184.184.437.184.759 0 .613-.145 1.089-.437 1.426-.567.69-1.372 1.326-2.415 1.909a6.604 6.604 0 0 1-3.312.874c-1.61 0-2.86-.437-3.749-1.311-.889-.874-1.334-2.07-1.334-3.588 0-1.058.223-2.04.667-2.944.445-.92 1.058-1.648 1.84-2.185a4.71 4.71 0 0 1 2.691-.805c.89 0 1.603.268 2.14.805.536.521.804 1.234.804 2.139 0 1.058-.383 1.97-1.15 2.737-.751.751-2.031 1.35-3.84 1.794.383.705 1.111 1.058 2.184 1.058.69 0 1.472-.238 2.346-.713a7.892 7.892 0 0 0 2.3-1.909c.184-.215.391-.322.621-.322Zm-5.796-3.335c-.567 0-1.05.33-1.449.989-.383.66-.575 1.457-.575 2.392v.046c.905-.215 1.618-.537 2.14-.966.52-.43.781-.928.781-1.495 0-.291-.084-.521-.253-.69-.153-.184-.368-.276-.644-.276Zm8.386 9.085c-.798 0-1.411-.184-1.84-.552-.414-.368-.621-.782-.621-1.242 0-.399.145-.744.437-1.035.291-.291.72-.437 1.288-.437.199 0 .429.023.69.069l.62.069a2.84 2.84 0 0 0-.275-1.127 4.879 4.879 0 0 0-.598-1.012 12.547 12.547 0 0 0-.69-.874c-.476.905-.951 1.656-1.426 2.254-.46.598-.966 1.165-1.518 1.702-.276.276-.568.414-.874.414a.77.77 0 0 1-.598-.253 1.007 1.007 0 0 1-.23-.667c0-.307.107-.59.322-.851l.299-.368c.843-1.043 1.48-1.901 1.909-2.576.276-.445.552-.974.828-1.587.291-.613.667-1.449 1.127-2.507.291-.675.897-1.012 1.817-1.012.429 0 .728.038.897.115.168.077.253.2.253.368 0 .092-.031.238-.092.437-.062.2-.146.399-.253.598-.276.552-.414 1.02-.414 1.403 0 .23.076.483.23.759.168.276.421.621.759 1.035.49.644.858 1.196 1.104 1.656.26.445.39.935.39 1.472 0 .644-.153 1.257-.46 1.84a3.588 3.588 0 0 1-1.241 1.38c-.537.353-1.15.529-1.84.529Z"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h95v28H0z" />
              </clipPath>
              <clipPath id="b">
                <path fill="#fff" d="M0 0h28v28H0z" />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Section Text */}
        <div className="flex flex-col items-center self-stretch gap-[8px] text-center py-200">
          <h1 className="text-preset-1 text-neutral-950 ">
            {flow === "signUp" && "Create Your Account"}
            {flow === "signIn" && "Welcome to Note"}
          </h1>
          <p className="text-preset-5 text-neutral-600">
            {flow === "signUp" &&
              "Sign up to start organizing your notes and boost your productivity."}
            {flow === "signIn" && "Please log in to continue"}
          </p>
        </div>

        <form
          className="flex flex-col items-center self-stretch gap-4 pt-6"
          onSubmit={handleSubmit}
        >
          {/* Email Text-Input */}
          <div className="flex flex-col items-start self-stretch gap-75">
            <Label htmlFor="email" className="text-preset-4 text-neutral-950">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="flex py-150 px-200 border border-neutral-300 rounded-8 shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)] gap-100 self-stretch"
              placeholder="email@example.com"
            />
          </div>

          {/* Password Text-Input */}
          <div className="flex flex-col items-start self-stretch gap-75">
            <Label
              htmlFor="password"
              className="text-preset-4 text-neutral-950 flex justify-between items-center w-full"
            >
              <span>Password</span>
              {flow === "signIn" && (
                <span className="text-neutral-600 text-[12px] leading-[140%] underline">
                  Forgot
                </span>
              )}
            </Label>
            <div className="relative w-full">
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="flex py-150 px-200 pr-12 border border-neutral-300 rounded-8 shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)] gap-100 self-stretch text-base sm:text-lg"
                style={{ paddingRight: 44 }}
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-neutral-500 hover:text-neutral-700 bg-white"
                tabIndex={0}
              >
                {showPassword ? (
                  // Eye closed icon
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="12"
                      cy="12"
                      rx="8"
                      ry="5"
                      stroke="#0E121B"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="2"
                      stroke="#0E121B"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="4"
                      y1="20"
                      x2="20"
                      y2="4"
                      stroke="#0E121B"
                      strokeWidth="1.5"
                    />
                  </svg>
                ) : (
                  // Eye open icon
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="12"
                      cy="12"
                      rx="8"
                      ry="5"
                      stroke="#0E121B"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="2"
                      stroke="#0E121B"
                      strokeWidth="1.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            {flow === "signUp" && (
              <div className="flex items-center self-stretch gap-100">
                {/* Password Strength Indicator */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M2 8.5C2 11.8133 4.68605 14.5 8 14.5C11.3139 14.5 14 11.8133 14 8.5C14 5.18605 11.3139 2.5 8 2.5C4.68605 2.5 2 5.18605 2 8.5Z"
                    stroke="#525866"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.0038 10.9621V8.09573V10.9621ZM8 6.0695V6.02734V6.0695Z"
                    fill="#525866"
                  />
                  <path
                    d="M8.0038 10.9621V8.09573M8 6.0695V6.02734"
                    stroke="#525866"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="text-[12px] leading-[140%] text-neutral-600">
                  At least 8 characters
                </p>
              </div>
            )}
          </div>
          <Button
            type="submit"
            className="w-full py-150 px-200 bg-blue-500 rounded-8 flex h-[44px] items-center justify-center self-stretch"
          >
            <span className="text-preset-3 text-white">
              {flow === "signUp" ? "Sign up" : "Login"}
            </span>
          </Button>
        </form>

        <hr className="mt-200 mb-6 border-t border-neutral-200 w-full" />

        <div className="text-preset-5 mx-auto text-neutral-600 mb-4">
          Or log in with:
        </div>

        <Button className="w-full py-150 px-200 bg-trasnparent rounded-[12px] flex h-[48px] items-center justify-center self-stretch border border-neutral-300">
          <div className="flex items-center gap-100 pr-4">
            {/* Google Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="26"
              viewBox="0 0 25 26"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.3379 15.2181C21.4459 14.6681 21.4999 14.0881 21.4999 13.5081C21.4999 13.1161 21.4739 12.7341 21.4239 12.3611C21.3869 12.0871 21.1429 11.8881 20.8669 11.8881H13.0619C12.7519 11.8881 12.4999 12.1401 12.4999 12.4501V14.6561C12.4999 14.9661 12.7519 15.2181 13.0619 15.2181H17.3369C17.5129 15.2181 17.6419 15.3981 17.5759 15.5611C16.6409 17.8711 14.1859 19.3871 11.4439 18.8801C9.33793 18.4911 7.61193 16.8211 7.15993 14.7281C6.39293 11.1761 9.07693 8.03814 12.4999 8.03814C13.6219 8.03814 14.6619 8.37514 15.5289 8.95214C15.7609 9.10614 16.0639 9.09114 16.2599 8.89214L17.9619 7.15914C18.1939 6.92214 18.1799 6.52814 17.9159 6.32714C16.4749 5.23114 14.6929 4.56514 12.7549 4.51214C7.88293 4.37714 3.66393 8.33514 3.50493 13.2061C3.33793 18.3141 7.43193 22.5081 12.4999 22.5081C16.8829 22.5081 20.5369 19.3681 21.3379 15.2181Z"
                fill="#0E121B"
              />
            </svg>
            <span className="text-neutral-950 font-medium tracking-[0.5px]">
              Google
            </span>
          </div>
        </Button>

        <hr className="my-200 border-t border-neutral-200 w-full" />

        {flow === "signUp" && (
          <button
            className="text-preset-5 mx-auto text-neutral-600 mb-600"
            onClick={() => setFlow("signIn")}
          >
            Already have an account? Login
          </button>
        )}
        {flow === "signIn" && (
          <button
            className="text-preset-5 mx-auto text-neutral-600 mb-600"
            onClick={() => setFlow("signUp")}
          >
            No account yet? Sign Up
          </button>
        )}
      </div>
    </div>
  );
}
