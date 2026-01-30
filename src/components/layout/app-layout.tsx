"use client";

import React from "react";
import {
  Home,
  User,
  Settings,
  ShoppingBag,
  BookOpen,
  MoreHorizontal,
  SquarePen,
  Sun,
  Moon
} from "lucide-react";

import { useTheme } from "@/context/theme-context";
import { Button, Avatar, Image } from "@heroui/react";

/**
 * AppLayout Component
 * Sistema de navegación estilo X/Twitter usando Tailwind CSS puro con componentes HeroUI.
 */
export function AppLayout({ children, rightSidebarContent }: { children: React.ReactNode; rightSidebarContent?: React.ReactNode }) {
  const { isDarkMode, toggleTheme, accentColor, accentBg, accentHover } = useTheme();

  const navItems = [
    { icon: Home, label: "Home", active: true },
    { icon: ShoppingBag, label: "Store" },
    { icon: BookOpen, label: "Courses" },
    { icon: User, label: "Profile" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className={`${isDarkMode ? "dark bg-black text-white" : "bg-white text-black"} min-h-screen transition-colors duration-200`}>
      <div className="mx-auto max-w-[1300px] flex justify-center lg:justify-start">

        {/* Sidebar Izquierdo */}
        <aside className="fixed md:sticky top-0 h-screen w-[72px] lg:w-[275px] flex flex-col px-2 border-r border-gray-200 dark:border-gray-800">

          <div className="flex flex-col h-full overflow-hidden">

            <div className="flex items-center justify-center lg:justify-start p-6 mb-2 shrink-0">
              <Image
                alt="Logo UNAB"
                src="/logo.png"
                className="w-40 h-auto object-contain"
              />
            </div>


            <nav className="flex flex-col flex-1 justify-center space-y-1 overflow-y-auto no-scrollbar">
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="light"
                  startContent={
                    <item.icon
                      className={`w-7 h-7 shrink-0 ${item.active ? accentColor : ""}`}
                      strokeWidth={item.active ? 2.5 : 2}
                    />
                  }
                  className={`flex flex-row items-center lg:w-fit w-full lg:h-auto py-3 px-6 rounded-full gap-4 transition-colors ${accentHover} ${item.active ? "font-bold" : "font-normal"
                    }`}
                >
                  <span className="text-xl">{item.label}</span>
                </Button>

              ))}
            </nav>

            {/* Sección Inferior: Post, Tema y Avatar */}
            <div className="flex flex-col space-y-2 mb-4 mt-auto">

              {/* Botón Post */}
              <div className="px-2">
                <Button
                  className={`w-12 h-12 lg:w-full lg:h-[52px] font-bold text-lg shadow-sm ${accentBg}`}
                  radius="full"
                  isIconOnly={false} // Responsive handling via children
                >
                  <span className="hidden lg:block">Post</span>
                  <SquarePen className="block lg:hidden w-6 h-6" />
                </Button>
              </div>

              {/* Toggle de Tema */}
              <div className="px-2">
                <Button
                  onPress={toggleTheme}
                  variant="light"
                  className="flex flex-row items-center w-12 h-12 lg:w-fit lg:h-auto lg:px-6 lg:py-3 justify-start gap-4 rounded-full"
                >
                  {isDarkMode ? (
                    <Sun className="w-7 h-7 shrink-0" />
                  ) : (
                    <Moon className="w-7 h-7 shrink-0" />
                  )}

                  <span className="hidden lg:block text-xl font-normal">
                    {isDarkMode ? "Light" : "Dark"} Mode
                  </span>
                </Button>
              </div>

              {/* Perfil de Usuario */}
              <div className="px-2 pt-2">
                <div className="flex items-center gap-3 w-full p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-900 transition-colors cursor-pointer group">
                  <Avatar
                    src="https://i.pravatar.cc/150?u=jpalomino502"
                    alt="Joseph"
                    className="w-10 h-10"
                  />
                  <div className="hidden lg:flex flex-col flex-1 overflow-hidden">
                    <span className="font-bold text-sm truncate text-current">Joseph</span>
                    <span className="text-gray-500 text-sm truncate">@jpalomino502</span>
                  </div>
                  <MoreHorizontal className="hidden lg:block w-5 h-5 text-gray-500" />
                </div>
              </div>

            </div>

          </div>
        </aside>

        {/* Contenedor Central */}
        <main className="flex-1 max-w-[600px] min-h-screen border-r border-gray-200 dark:border-gray-800 pb-20 md:pb-0">
          <div className="p-4">
            {children || (
              <></>
            )}
          </div>
        </main>

        {/* Sidebar Derecha */}
        <div className="hidden xl:block w-[350px] sticky top-0 h-screen p-4 ml-8">
          {rightSidebarContent || (
            <div className="h-full rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-800 flex items-center justify-center p-8 text-center">
              <p className="text-gray-400 italic">
                Aquí se pueden agregar widgets o información adicional como componente hijo.
              </p>
            </div>
          )}
        </div>

      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 z-50">
        <div className="flex items-center justify-around h-14">
          <Button isIconOnly variant="light" className={accentColor} aria-label="Home"><Home className="w-7 h-7" /></Button>
          <Button isIconOnly variant="light" className="text-gray-500" aria-label="Store"><ShoppingBag className="w-7 h-7" /></Button>
          <Button isIconOnly variant="light" className="text-gray-500" aria-label="Courses"><BookOpen className="w-7 h-7" /></Button>
          <Button isIconOnly variant="light" className="text-gray-500" aria-label="Settings"><Settings className="w-7 h-7" /></Button>
        </div>
      </nav>
    </div>
  );
}

export default AppLayout;