"use client";

import React, { useState } from "react";
import {
  Image as ImageIcon,
  FileText,
  Smile,
  Calendar,
  MapPin,
  MoreHorizontal,
  MessageCircle,
  Repeat2,
  Heart,
  Share,
  BarChart3,
  Globe2
} from "lucide-react";
import { useTheme } from "@/context/theme-context";
import { Button, Textarea, Avatar, Card, CardHeader, CardBody, CardFooter, Image } from "@heroui/react";

/**
 * HomeView Component
 * Replica la interfaz principal de X (Twitter) basada en las imágenes proporcionadas.
 * Incluye pestañas de navegación superior, área de composición y lista de posts.
 */
export default function HomeView() {
  const [activeTab, setActiveTab] = useState("para-ti");
  const { accentColor, accentBg, accentHover } = useTheme();

  const posts = [
    {
      id: 1,
      author: "Gustavo Petro",
      username: "petrogustavo",
      verified: true,
      time: "1h",
      content: "Se suspende a partir de la fecha, pero al estar vigente, antes de esta fecha los decretos derivados gozan de presunción de legalidad",
      avatar: "https://i.pravatar.cc/150?u=petrogustavo",
      isQuote: true,
      quotedPost: {
        author: "Corte Constitucional",
        username: "CConstitucional",
        verified: true,
        time: "2h",
        content: "#LaCorteInforma | La Corte suspende provisionalmente el Decreto 1390 de 2025 “Por el cual se declara el Estado de Emergencia Económica y Social en todo el territorio nacional”, mientras se profiere una decisión de fondo.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop"
      },
      stats: { comments: "1.2k", retweets: "3.4k", likes: "12k", views: "1.5M" }
    }
  ];

  return (
    <div className="w-full">
      {/* Pestañas Superiores */}
      <div className="sticky top-0 z-10 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-gray-200 dark:border-gray-800">
        <div className="flex w-full">
          <Button
            variant="light"
            radius="none"
            onPress={() => setActiveTab("para-ti")}
            className="flex-1 flex justify-center hover:bg-gray-100 dark:hover:bg-white/5 transition-colors h-14"
          >
            <div className="relative py-4 h-full flex items-center">
              <span className={`text-sm font-bold ${activeTab === "para-ti" ? "text-black dark:text-white" : "text-gray-500"}`}>
                Para ti
              </span>
              {activeTab === "para-ti" && (
                <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-full ${accentBg.split(' ')[0]}`} />
              )}
            </div>
          </Button>
          <Button
            variant="light"
            radius="none"
            onPress={() => setActiveTab("siguiendo")}
            className="flex-1 flex justify-center hover:bg-gray-100 dark:hover:bg-white/5 transition-colors h-14"
          >
            <div className="relative py-4 h-full flex items-center">
              <span className={`text-sm font-bold ${activeTab === "siguiendo" ? "text-black dark:text-white" : "text-gray-500"}`}>
                Siguiendo
              </span>
              {activeTab === "siguiendo" && (
                <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-full ${accentBg.split(' ')[0]}`} />
              )}
            </div>
          </Button>
        </div>
      </div>

      {/* Área de Composición de Post */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex gap-3">
        <div className="shrink-0">
          <Avatar src="https://i.pravatar.cc/150?u=jpalomino502" className="w-10 h-10" />
        </div>
        <div className="flex-1">
          <Textarea
            placeholder="¿Qué está pasando?"
            classNames={{
              input: "bg-transparent text-xl outline-none resize-none placeholder-gray-500 min-h-[50px] data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent",
              inputWrapper: "bg-transparent shadow-none"
            }}
            variant="flat"
            minRows={2}
          />

          <div className={`flex items-center gap-1 py-3 border-b border-gray-100 dark:border-gray-900 mb-3 ${accentColor}`}>
            <Globe2 className="w-4 h-4" />
            <span className="text-xs font-bold">Cualquier persona puede responder</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Button isIconOnly variant="light" radius="full" className={accentColor}>
                <ImageIcon className="w-5 h-5" />
              </Button>
              <Button isIconOnly variant="light" radius="full" className={accentColor}>
                <FileText className="w-5 h-5" />
              </Button>
              <Button isIconOnly variant="light" radius="full" className={accentColor}>
                <Smile className="w-5 h-5" />
              </Button>
              <Button isIconOnly variant="light" radius="full" className={accentColor}>
                <Calendar className="w-5 h-5" />
              </Button>
              <Button isIconOnly variant="light" radius="full" className={`${accentColor} opacity-50`}>
                <MapPin className="w-5 h-5" />
              </Button>
            </div>
            <Button
              className={`${accentBg} font-bold text-sm`}
              radius="full"
              size="sm"
            >
              Postear
            </Button>
          </div>
        </div>
      </div>

      {/* Lista de Posts */}
      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        {posts.map((post) => (
          <article
            key={post.id}
            className="p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            <div className="flex gap-3">
              <div className="shrink-0">
                <Avatar src={post.avatar} className="w-10 h-10" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 flex-wrap">
                    <span className="font-bold text-sm hover:underline">{post.author}</span>
                    {post.verified && (
                      <svg viewBox="0 0 24 24" className={`w-4 h-4 fill-current ${accentColor}`}>
                        <path d="M22.5 12.5c0-1.58-.88-2.95-2.18-3.66.15-.44.23-.91.23-1.4 0-2.38-1.93-4.32-4.32-4.32-.48 0-.95.08-1.39.23C14.13 2.07 12.76 1.2 11.2 1.2s-2.93.87-3.64 2.15c-.44-.15-.91-.23-1.4-.23-2.38 0-4.32 1.93-4.32 4.32 0 .48.08.95.23 1.39C.87 9.57 0 10.94 0 12.5s.87 2.93 2.15 3.64c-.15.44-.23.91-.23 1.4 0 2.38 1.93 4.32 4.32 4.32.48 0 .95-.08 1.39-.23 1.12 1.83 3.12 3.06 5.37 3.06s4.25-1.23 5.37-3.06c.44.15.91.23 1.39.23 2.38 0 4.32-1.93 4.32-4.32 0-.48-.08-.95-.23-1.39 1.28-.71 2.16-2.08 2.16-3.66zm-12.91 4.29l-4.14-4.14 1.41-1.41 2.73 2.73 6.36-6.36 1.41 1.41-7.77 7.77z" />
                      </svg>
                    )}
                    <span className="text-gray-500 text-sm">@{post.username} · {post.time}</span>
                  </div>
                  <Button isIconOnly variant="light" size="sm" radius="full" className="text-gray-500 hover:text-[#1d9bf0]">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>

                <p className="text-sm mt-0.5 leading-normal">{post.content}</p>

                {/* Quoted Post (Como en la imagen 2) */}
                {post.isQuote && (
                  <Card className="mt-3 border border-gray-200 dark:border-gray-800 bg-transparent shadow-none hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                    <CardBody className="p-3 flex flex-col gap-2 overflow-visible">
                      <div className="flex items-center gap-2">
                        <Avatar src="https://i.pravatar.cc/150?u=cconstitucional" className="w-5 h-5" />
                        <span className="font-bold text-xs">{post.quotedPost.author}</span>
                        {post.quotedPost.verified && <svg viewBox="0 0 24 24" className={`w-3 h-3 fill-current ${accentColor}`}><path d="M22.5 12.5c0-1.58-.88-2.95-2.18-3.66.15-.44.23-.91.23-1.4 0-2.38-1.93-4.32-4.32-4.32-.48 0-.95.08-1.39.23C14.13 2.07 12.76 1.2 11.2 1.2s-2.93.87-3.64 2.15c-.44-.15-.91-.23-1.4-.23-2.38 0-4.32 1.93-4.32 4.32 0 .48.08.95.23 1.39C.87 9.57 0 10.94 0 12.5s.87 2.93 2.15 3.64c-.15.44-.23.91-.23 1.4 0 2.38 1.93 4.32 4.32 4.32.48 0 .95-.08 1.39-.23 1.12 1.83 3.12 3.06 5.37 3.06s4.25-1.23 5.37-3.06c.44.15.91.23 1.39.23 2.38 0 4.32-1.93 4.32-4.32 0-.48-.08-.95-.23-1.39 1.28-.71 2.16-2.08 2.16-3.66zm-12.91 4.29l-4.14-4.14 1.41-1.41 2.73 2.73 6.36-6.36 1.41 1.41-7.77 7.77z" /></svg>}
                        <span className="text-gray-500 text-xs">@{post.quotedPost.username} · {post.quotedPost.time}</span>
                      </div>
                      <p className="text-xs">{post.quotedPost.content}</p>
                      {post.quotedPost.image && (
                        <div className="mt-1 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
                          <Image
                            src={post.quotedPost.image}
                            alt="Post image"
                            className="w-full h-auto object-cover"
                            radius="lg"
                            removeWrapper
                          />
                        </div>
                      )}
                    </CardBody>
                  </Card>
                )}

                {/* Acciones del Post */}
                <div className="flex items-center justify-between mt-3 text-gray-500 max-w-md">
                  <div className="flex items-center gap-1 group">
                    <Button isIconOnly variant="light" size="sm" radius="full" className={`text-gray-500 group-hover:${accentColor.split(' ')[0]} group-hover:bg-blue-500/10`}>
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                    <span className={`text-xs group-hover:${accentColor.split(' ')[0]}`}>{post.stats.comments}</span>
                  </div>
                  <div className="flex items-center gap-1 group">
                    <Button isIconOnly variant="light" size="sm" radius="full" className="text-gray-500 group-hover:text-green-500 group-hover:bg-green-500/10">
                      <Repeat2 className="w-4 h-4" />
                    </Button>
                    <span className="text-xs group-hover:text-green-500">{post.stats.retweets}</span>
                  </div>
                  <div className="flex items-center gap-1 group">
                    <Button isIconOnly variant="light" size="sm" radius="full" className="text-gray-500 group-hover:text-pink-500 group-hover:bg-pink-500/10">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <span className="text-xs group-hover:text-pink-500">{post.stats.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 group">
                    <Button isIconOnly variant="light" size="sm" radius="full" className={`text-gray-500 group-hover:${accentColor.split(' ')[0]} group-hover:bg-blue-500/10`}>
                      <BarChart3 className="w-4 h-4" />
                    </Button>
                    <span className={`text-xs group-hover:${accentColor.split(' ')[0]}`}>{post.stats.views}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button isIconOnly variant="light" size="sm" radius="full" className={`text-gray-500 hover:${accentColor.split(' ')[0]} hover:bg-blue-500/10`}>
                      <Share className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}