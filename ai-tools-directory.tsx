"use client"

import { useState } from "react"
import { Search, Home, TrendingUp, Plane, ChevronUp, Bell, ImageIcon, Type, Check, Plus } from "lucide-react"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"

export default function AIToolsDirectory() {
  const [freeMode, setFreeMode] = useState(true)

  return (
    <div className="flex h-screen bg-[#1e1f26] text-white overflow-hidden">
      {/* Sidebar */}
      <div className="w-16 md:w-[48px] flex flex-col border-r border-gray-700">
        <div className="p-4 flex justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#a1a1aa" />
            <path d="M2 17L12 22L22 17" fill="#a1a1aa" />
            <path d="M2 12L12 17L22 12" fill="#a1a1aa" />
          </svg>
        </div>
        <div className="flex flex-col items-center gap-6 mt-4">
          <Button variant="ghost" size="icon" className="rounded-lg">
            <Home className="h-5 w-5 text-gray-400" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-lg">
            <Search className="h-5 w-5 text-gray-400" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-lg">
            <Check className="h-5 w-5 text-gray-400" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-lg">
            <Bell className="h-5 w-5 text-gray-400" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#9ca3af" />
              <path d="M2 17L12 22L22 17" stroke="#9ca3af" strokeWidth="2" fill="none" />
              <path d="M2 12L12 17L22 12" stroke="#9ca3af" strokeWidth="2" fill="none" />
            </svg>
          </Button>
        </div>
        <div className="mt-auto flex flex-col items-center gap-2 mb-4">
          <Button variant="ghost" size="icon" className="rounded-lg">
            <Plus className="h-5 w-5 text-gray-400" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="#9ca3af" strokeWidth="2" />
              <path d="M2 10H22" stroke="#9ca3af" strokeWidth="2" />
            </svg>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#9ca3af" strokeWidth="2" />
              <path d="M12 6V12L16 14" stroke="#9ca3af" strokeWidth="2" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Month/Year Sidebar */}
      <div className="w-[48px] flex-shrink-0 bg-[#1e1f26] border-r border-gray-700 overflow-y-auto hidden md:block">
        <div className="flex flex-col items-center text-xs text-gray-400">
          <div className="py-2 font-medium">NOW</div>
          <div className="py-2">MAR</div>
          <div className="py-2">FEB</div>
          <div className="py-2">JAN</div>
          <div className="py-2">DEC</div>
          <div className="py-2">NOV</div>
          <div className="py-2">OCT</div>
          <div className="py-2">SEP</div>
          <div className="py-2">AUG</div>
          <div className="py-2">JUL</div>
          <div className="py-2">JUN</div>
          <div className="py-2">MAY</div>
          <div className="py-2">2024</div>
          <div className="py-2">2023</div>
          <div className="py-2">2022</div>
          <div className="py-2">2021</div>
          <div className="py-2">2020</div>
          <div className="py-2">2019</div>
          <div className="py-2">2018</div>
          <div className="py-2">2017</div>
          <div className="py-2">2016</div>
          <div className="py-2">2015</div>
          <div className="py-2">#</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Top Navigation */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#a1a1aa" />
              <path d="M2 17L12 22L22 17" fill="#a1a1aa" />
              <path d="M2 12L12 17L22 12" fill="#a1a1aa" />
            </svg>
            <span className="text-sm">Free mode</span>
            <Switch checked={freeMode} onCheckedChange={setFreeMode} />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 5L21 12M21 12L14 19M21 12H3"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm">3 tools</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 15L8 11M12 15L16 11M12 15V3M21 21H3"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm">124 karma</span>
            </div>
            <Avatar className="h-8 w-8 border border-gray-600">
              <img src="/placeholder-user.jpg" alt="Miguel Salcedo" />
            </Avatar>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-400">*TAFT.com for short</p>
            <h1 className="text-5xl font-bold tracking-wider mt-2 mb-4">
              THERE&apos;S AN AI FOR THAT<sup className="text-sm">®</sup>
            </h1>
            <div className="text-sm mb-2">
              <span className="text-[#ff6b6b]">32,281 AI tools</span> for{" "}
              <span className="text-[#4dabf7]">13,993 tasks</span> and{" "}
              <span className="text-[#51cf66]">4,989 jobs</span>.
            </div>
            <div className="text-sm">
              Sponsor:{" "}
              <a href="#" className="text-[#ff9e3d] underline">
                Agent.ai (#1 Agent Marketplace)
              </a>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-6">
            <Input
              type="text"
              placeholder="Find AIs using AI"
              className="bg-[#2a2b36] border-gray-700 rounded-full py-6 pl-6 pr-12 w-full"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Search className="h-5 w-5" />
            </div>
          </div>
          <p className="text-center text-sm text-gray-400 mb-6">#1 website for AI tools. Used by 50M+ humans.</p>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button className="bg-[#2a2b36] hover:bg-[#3a3b46] text-white rounded-full px-6 py-2 flex items-center gap-2">
              <ImageIcon className="h-4 w-4 text-[#ff6b6b]" />
              <span>Generate images</span>
            </Button>
            <Button className="bg-[#2a2b36] hover:bg-[#3a3b46] text-white rounded-full px-6 py-2 flex items-center gap-2">
              <Type className="h-4 w-4 text-[#4dabf7]" />
              <span>Generate text</span>
            </Button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" className="bg-white text-black rounded-full px-6">
              Home
            </Button>
            <Button variant="ghost" className="text-white rounded-full px-6 flex items-center gap-2">
              For You
              <Badge className="bg-[#ff6b6b] text-white text-xs rounded-full h-5 min-w-5 flex items-center justify-center">
                17
              </Badge>
            </Button>
            <Button variant="ghost" className="text-white rounded-full px-6 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Trending
            </Button>
          </div>

          {/* Just Released Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Plane className="h-5 w-5" />
              <h2 className="text-xl font-semibold">Just released</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1 */}
              <div className="bg-[#2a2b36] rounded-lg p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-[#3a3b46] rounded-lg p-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                      <path
                        d="M8 12L11 15L16 9"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">OneSky Localizati...</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                      <span className="inline-block w-2 h-2 bg-[#4dabf7] rounded-full"></span>
                      <span>App localization</span>
                      <Bell className="h-3 w-3 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-400">Released 1m ago</div>
                <div className="flex items-center justify-between mt-1">
                  <div className="text-xs">Free + from $29/mo</div>
                  <div className="flex items-center gap-1 text-xs">
                    <ChevronUp className="h-3 w-3 text-green-500" />
                    <span>1</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#2a2b36] rounded-lg p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-[#ff6b6b] rounded-lg p-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="4" width="16" height="16" rx="2" fill="#ff6b6b" />
                      <circle cx="12" cy="10" r="3" fill="white" />
                      <path d="M18 18H6C6 15.7909 8.68629 14 12 14C15.3137 14 18 15.7909 18 18Z" fill="white" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">AI Headshot Ge...</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                      <span className="inline-block w-2 h-2 bg-[#ffd43b] rounded-full"></span>
                      <span>Portraits</span>
                      <Bell className="h-3 w-3 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-400">Released 2h ago</div>
                <div className="flex items-center justify-between mt-1">
                  <div className="text-xs">From $0.59</div>
                  <div className="flex items-center gap-1 text-xs">
                    <ChevronUp className="h-3 w-3 text-green-500" />
                    <span>3</span>
                    <span className="ml-2">63</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#2a2b36] rounded-lg p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-[#20c997] rounded-lg p-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                      <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" fill="none" />
                      <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">
                      Comp AI <span className="text-blue-400">✓</span>
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                      <span className="inline-block w-2 h-2 bg-[#4dabf7] rounded-full"></span>
                      <span>Compliance autom...</span>
                      <Bell className="h-3 w-3 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-400">Released 21h ago</div>
                <div className="flex items-center justify-between mt-1">
                  <div className="text-xs">Free</div>
                  <div className="flex items-center gap-1 text-xs">
                    <ChevronUp className="h-3 w-3 text-green-500" />
                    <span>3</span>
                    <span className="ml-2">144</span>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-[#2a2b36] rounded-lg p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-[#7950f2] rounded-lg p-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L4 6V12L12 16L20 12V6L12 2Z" fill="white" />
                      <path d="M4 12V18L12 22L20 18V12" stroke="white" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">
                      Mindsmith <span className="text-blue-400">✓</span>
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                      <span className="inline-block w-2 h-2 bg-[#ffd43b] rounded-full"></span>
                      <span>Courses</span>
                      <Bell className="h-3 w-3 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-400">Released 1mo ago</div>
                <div className="flex items-center justify-between mt-1">
                  <div className="text-xs flex items-center">
                    <span className="mr-2">#1 in Trending</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <span>986</span>
                    <span className="ml-2">44,654</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trending Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5" />
              <h2 className="text-xl font-semibold">Trending</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-[#2a2b36] rounded-lg p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-[#3a3b46] rounded-lg p-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2" />
                      <path d="M3 8H21" stroke="white" strokeWidth="2" />
                      <path d="M8 21V8" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">
                      Lido Document Processing <span className="text-blue-400">✓</span>
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                      <span className="inline-block w-2 h-2 bg-[#4dabf7] rounded-full"></span>
                      <span>Document data extraction</span>
                      <Bell className="h-3 w-3 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-400">v1.2 released 3h ago</div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#2a2b36] rounded-lg p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-[#15aabf] rounded-lg p-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M21 15C21 16.6569 16.9706 18 12 18C7.02944 18 3 16.6569 3 15"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <path
                        d="M21 12C21 13.6569 16.9706 15 12 15C7.02944 15 3 13.6569 3 12"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <ellipse cx="12" cy="9" rx="9" ry="3" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">
                      Smarter ChatG... <span className="text-blue-400">✓</span>
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                      <span className="inline-block w-2 h-2 bg-[#4dabf7] rounded-full"></span>
                      <span>ChatGPT</span>
                      <Bell className="h-3 w-3 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-400">Released 1mo ago</div>
                <div className="flex items-center justify-end mt-1">
                  <div className="flex items-center gap-1 text-xs">
                    <span>5,556</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6">
        <Button className="bg-[#228be6] hover:bg-[#1c7ed6] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
          <Plus className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
