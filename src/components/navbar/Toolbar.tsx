import {
  useEffect,
  useRef,
  useState,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import { CloseButton, HamburgerButton } from "./Hamburger";
import { useTranslations } from "../../i18n/utils";

export function Toolbar(
  props: PropsWithChildren<{
    lang: string;
    mainLinks?: ReactNode;
    mobileLinks?: ReactNode;
  }>
) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const t = useTranslations(props.lang as "it" | "en");

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <div className="">
      <div className="hidden lg:block lg:container lg:mx-auto">
        <nav className="flex gap-10 py-6 justify-end items-center font-bold">
          {props.mainLinks}
        </nav>
      </div>
      <div className="flex flex-row-reverse lg:hidden">
        <HamburgerButton
          label={t("hamburger.open")}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        ></HamburgerButton>
        {isMenuOpen ? (
          <div className="bg-primary fixed top-0 left-0 w-full min-h-screen z-[999999] py-3 px-5">
            <div className="flex flex-row-reverse">
              <CloseButton
                label={t("hamburger.close")}
                innerRef={ref}
                onClick={() => setIsMenuOpen(false)}
              ></CloseButton>
            </div>
            <nav
              tabIndex={-2}
              className="flex flex-col gap-6 pt-6 text-center text-2xl font-black text-primary-content"
            >
              {props.mobileLinks}
            </nav>
          </div>
        ) : null}
      </div>
    </div>
  );
}
