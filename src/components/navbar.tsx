"use client"
import Link from "next/link"
import {
    CircleUser,
    Menu,
    Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo, ThemeToggleButton } from "./toggleTheme"
import { useSession } from "next-auth/react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter } from "./ui/dialog"
import GoogleButton from "./auth/LoginButtons/GoogleButton"
import SignOutButton from "./SignOut"
import GithubButton from "./auth/LoginButtons/GitHubButton"
import Image from "next/image"

export default function Navbar() {

    const session = useSession();

    if (session.data?.user) {
        return (
            <div className="flex h-[10svh] w-full z-0 flex-col">
                <div className="fixed top-0 w-full flex h-16 shadow-md items-center gap-4 border-b bg-background px-4 md:px-6">
                    <Link href="/" className="hidden flex-col gap-6 text-lg font-normal md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                        <Logo />
                    </Link>
                    <nav className="hidden flex-col gap-1 text-lg font-normal md:flex md:flex-row md:items-center md:gap-1 md:text-sm lg:gap-1">
                        <Link
                            href="#"
                            className="text-muted-foreground transition-colors hover:text-foreground w-[100px] flex items-center justify-center"
                        >
                            UPDATES
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground transition-colors hover:text-foreground w-[100px] flex items-center justify-center"
                        >
                            STORY LIST
                        </Link>
                        <Link
                            href={process.env.NEXT_PUBLIC_CREATOR_SITE as string}
                            className="text-muted-foreground transition-colors hover:text-foreground w-[100px] flex items-center justify-center"
                            target="_blank"
                        >
                            CREATORS'
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground transition-colors hover:text-foreground w-[100px] flex items-center justify-center"
                        >
                            ABOUT
                        </Link>
                    </nav>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-lg font-semibold"
                            >
                                <Logo />
                            </Link>

                            <nav className="grid gap-6 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="text-muted-foreground transition-colors hover:text-foreground w-[100px] flex items-center justify-center"
                                >
                                    UPDATES
                                </Link>
                                <Link
                                    href="#"
                                    className="text-muted-foreground transition-colors hover:text-foreground w-[100px] flex items-center justify-center"
                                >
                                    STORY LIST
                                </Link>
                                <Link
                                    href="#"
                                    className="text-muted-foreground transition-colors hover:text-foreground w-[100px] flex items-center justify-center"
                                >
                                    ABOUT
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                        <form className="ml-auto flex-1 sm:flex-initial">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search manga..."
                                    className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                                />
                            </div>
                        </form>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="secondary" size="icon" className="rounded-full">
                                    {/* <CircleUser className="h-5 w-5" /> */}
                                    <Image src={session.data.user.image as string} alt="User" height={30} width={30} className=" rounded-full" />
                                    <span className="sr-only">Toggle user menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>{session.data?.user?.name}</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <SignOutButton />
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="h-5 w-5">
                        <ThemeToggleButton />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex h-[10svh] w-full z-0 flex-col">
            <div className="fixed top-0 w-full flex h-16 shadow-md items-center gap-4 border-b bg-background px-4 md:px-6">
                <Link href="/" className="hidden flex-col gap-6 text-lg font-normal md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Logo />
                </Link>
                <nav className="hidden flex-col gap-6 text-lg font-normal md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground w-[100px] flex items-center justify-center"
                    >
                        UPDATES
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground w-[100px] flex items-center justify-center"
                    >
                        STORY LIST
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground w-[100px] flex items-center justify-center"
                    >
                        ABOUT
                    </Link>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <Logo />
                        </Link>

                        <nav className="grid gap-6 text-lg font-medium">
                            <Link
                                href="#"
                                className="text-muted-foreground transition-colors hover:text-foreground w-[100px] flex items-center justify-center"
                            >
                                UPDATES
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground transition-colors hover:text-foreground w-[100px] flex items-center justify-center"
                            >
                                STORY LIST
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground transition-colors hover:text-foreground w-[100px] flex items-center justify-center"
                            >
                                ABOUT
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <form className="ml-auto flex-1 sm:flex-initial">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search manga..."
                                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                            />
                        </div>
                    </form>
                    <Dialog>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="secondary" size="icon" className="rounded-full">
                                    <CircleUser className="h-5 w-5" />
                                    <span className="sr-only">Toggle user menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem className="w-full">
                                    <DialogTrigger className="w-full">
                                        <Button variant="default" className="w-full">Login</Button>
                                    </DialogTrigger>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DialogContent className="w-[80svw]">
                            <DialogHeader>
                                <DialogTitle>
                                    Login into your Account
                                </DialogTitle>
                                <DialogDescription>
                                    Use your trusted platform to login into your account
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <GoogleButton />
                                <GithubButton />
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
                <div className="h-5 w-5">
                    <ThemeToggleButton />
                </div>
            </div>
        </div>
    )
}
