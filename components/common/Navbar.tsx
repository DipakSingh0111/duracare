"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, type HeaderData, type SectionProps } from "@/data";
import Icon from "@/components/common/Icon";
import Topbar from "@/components/common/Topbar";

export default function Navbar({ data, className = "" }: SectionProps<HeaderData> = {}) {
  const navbar = data || site.header;
  const { logo, labels } = site;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`relative z-50 h-[50px] shrink-0 lg:h-[54px] ${className}`}>
      <Topbar className="fixed inset-x-0 top-0 z-50" />

      <div className="fixed inset-x-0 top-[50px] z-50 px-3 pt-1 sm:px-6 lg:top-[54px] lg:px-10">
        <nav className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between rounded-full bg-white pl-5 pr-2.5 shadow-[0_14px_34px_-14px_rgba(6,26,69,0.55)] sm:pl-8 lg:h-[74px] lg:pl-12 lg:pr-3">
          <Link href="/" aria-label={labels.logoHome} className="shrink-0">
            <Image
              src={logo.header}
              alt={logo.alt}
              width={2172}
              height={724}
              preload
              className="h-[70px] w-auto lg:h-[92px]"
            />
          </Link>

          <ul className="hidden items-center gap-9 lg:flex xl:gap-[60px]">
            {navbar.menu.map((l) => (
              <li key={l.label} className="group relative">
                <Link
                  href={l.href}
                  className={`relative flex items-center gap-2 py-[25px] text-base font-semibold transition-colors duration-300 ${
                    isActive(l.href) ? "text-orange" : "text-navy hover:text-orange"
                  }`}
                >
                  {l.label}
                  {l.dropdown && (
                    <Icon
                      name={navbar.icons.dropdown}
                      size={11}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  )}
                  <span
                    className={`absolute -inset-x-2 bottom-[14px] h-[2px] origin-left rounded-full bg-orange transition-transform duration-300 ${
                      isActive(l.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>

                {l.dropdown && (
                  <ul className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 translate-y-2 rounded-2xl bg-white p-2 opacity-0 shadow-[0_20px_40px_-12px_rgba(11,42,111,0.35)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {l.dropdown.map((c) => (
                      <li key={c.label}>
                        <Link
                          href={c.href}
                          className="block rounded-xl px-4 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-orange hover:text-white"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <Link
            href={navbar.cta.href}
            className="group hidden h-[54px] items-center gap-9 rounded-full bg-orange pl-9 pr-1.5 text-[17px] font-medium text-white transition-colors duration-300 hover:bg-navy lg:flex xl:gap-[52px]"
          >
            {navbar.cta.label}
            <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white text-orange transition-colors group-hover:text-navy">
              <Icon
                name={navbar.icons.arrow}
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={labels.toggleMenu}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-orange text-white transition-colors hover:bg-navy lg:hidden"
          >
            <Icon name={open ? navbar.icons.close : navbar.icons.menu} size={18} />
          </button>
        </nav>

        {open && (
          <div className="mx-auto mt-2 max-h-[calc(100vh-110px)] max-w-[1400px] overflow-y-auto rounded-3xl bg-white p-4 shadow-xl lg:hidden">
            <ul className="space-y-1">
              {navbar.menu.map((l) => (
                <li key={l.label}>
                  {l.dropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setMobileDropdown((v) => !v)}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-medium text-navy hover:bg-orange/10 hover:text-orange"
                      >
                        {l.label}
                        <Icon
                          name={navbar.icons.dropdown}
                          size={12}
                          className={`transition-transform ${mobileDropdown ? "rotate-180" : ""}`}
                        />
                      </button>
                      {mobileDropdown && (
                        <ul className="ml-4 border-l-2 border-orange/40 pl-3">
                          {l.dropdown.map((c) => (
                            <li key={c.label}>
                              <Link
                                href={c.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:text-orange"
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-3 font-medium hover:bg-orange/10 hover:text-orange ${
                        isActive(l.href) ? "text-orange" : "text-navy"
                      }`}
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Link
              href={navbar.cta.href}
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-3 rounded-full bg-orange py-3 font-semibold text-white hover:bg-navy"
            >
              {navbar.cta.label} <Icon name={navbar.icons.arrow} size={14} />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
