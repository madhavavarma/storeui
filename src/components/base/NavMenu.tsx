import * as React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useNavigationHelper } from "@/hooks/use-navigate-helper";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Address",
    href: "/#/aboutus",
    description: "123 Main Street, Vizag, Andhra Pradesh, India - 530001",
  },
  {
    title: "Phone",
    href: "/#/aboutus",
    description: "+91 98765 43210",
  },
  {
    title: "WhatsApp",
    href: "/#/aboutus",
    description: "Chat with us on WhatsApp at +91 98765 43210",
  },
  {
    title: "Follow Us",
    href: "/#/aboutus",
    description: "Stay connected on Facebook, Instagram, and Twitter.",
  },
];

const components2: { title: string; href: string; description: string }[] = [
  {
    title: "How can I contact customer support?",
    href: "/#/faq",
    description: "You can reach our support team via email at support@example.com or call us at +91 98765 43210.",
  },
  {
    title: "What payment methods do you accept?",
    href: "/#/faq",
    description: "We accept credit/debit cards, UPI, net banking, and wallets.",
  },
  {
    title: "How can I track my order?",
    href: "/#/faq",
    description: "You can track your order from the 'My Orders' section after logging in.",
  },
  {
    title: "What is your return policy?",
    href: "/#/faq",
    description: "We offer a 7-day return policy for most products. Check the return policy on the product page for details.",
  },
  {
    title: "Do you offer cash on delivery (COD)?",
    href: "/#/faq",
    description: "Yes, COD is available for select locations. Check availability at checkout.",
  },
  {
    title: "How long does delivery take?",
    href: "/#/faq",
    description: "Standard delivery takes 3-5 business days, while express delivery takes 1-2 days.",
  },
];
  


export function NavMenu() {

  const navigationHelper = useNavigationHelper();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <ListItem
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    onClick={() => navigationHelper.goToHome()}
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Millet Van
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground"> 
                      Welcome to Millet Van. Your One-Stop Destination for Healthy & Nutritious Food!
                    </p>
                    <p className="text-sm leading-tight text-muted-foreground mt-2">
                      <i>Pure, natural, and healthy - no chemicals, refined sugar, preservatives or artificail additives for a better lifestyle!</i>
                    </p>
                  </ListItem>
                </NavigationMenuLink>
              </li>
              <li>
              <ListItem onClick={() => navigationHelper.goToHome()} title="Home">
                Enjoy a wholesome shopping experience!
              </ListItem>
              </li>
              <ListItem onClick={() => navigationHelper.goToProducts()} title="Products">
                Discover a wide range of nutritious and wholesome foods!
              </ListItem>
              <ListItem href="/aboutus" title="About Us">
                Committed to a healthier you. Click to know about us.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Questions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3  md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components2.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
