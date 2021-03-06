import Link from "../Link";
import {
  Flex,
  Heading,
  Text,
  Container,
  Avatar,
  BaseIcon,
  VerifiedBadge,
  Linkto,
} from "@linkto/gamut";
import { CSSstring, Link as LinkType, ThemeStyle } from "@linkto/core";
import type { FC } from "react";

export interface PageContentProps {
  avatarURL: string;
  title: string;
  bio: string;
  links: LinkType[];
  style: ThemeStyle;
  showBrand: boolean;
  showVerifiedBadge: boolean;
}

export type TextType = "title" | "bio" | "button";

const PageContent: FC<PageContentProps> = ({
  avatarURL,
  title,
  bio,
  links,
  style,
  showBrand,
  showVerifiedBadge,
}) => {
  const getTextStyles = (type: TextType) => {
    const fontSize =
      type === "title"
        ? { ...CSSstring(style.font.font_size_lead) }
        : type === "bio"
        ? { ...CSSstring(style.font.font_size_text) }
        : { ...CSSstring(style.font.font_size_button) };

    return {
      ...CSSstring(style.text.css),
      ...CSSstring(style.font.css),
      ...fontSize,
    };
  };

  return (
    <Container className="!max-w-screen-md pt-12 min-h-screen z-10 flex flex-col justify-between">
      <div>
        {avatarURL && (
          <Flex justify="center" className="pb-3.5">
            <Avatar src={avatarURL} alt={title} fallback={title} size="lg" />
          </Flex>
        )}

        {title && (
          <Flex className="pb-3 items-center justify-center">
            <Heading
              as="h1"
              style={getTextStyles("title")}
              className="!font-medium text-center"
            >
              {title}
            </Heading>
            {showVerifiedBadge && (
              <BaseIcon
                icon={VerifiedBadge}
                fill="#0081f1"
                size={21}
                className="ml-0.5 mt-0.5"
                aria-label="User verified"
              />
            )}
          </Flex>
        )}

        {bio && (
          <Text
            as="p"
            style={getTextStyles("bio")}
            className="text-center !font-normal pb-2.5"
          >
            {bio}
          </Text>
        )}

        {links.length > 0 ? (
          <div className="mt-6 mb-28">
            {links
              .filter((l) => l.visible !== false)
              .map((l) => (
                <Link
                  key={l.id}
                  url={l.url}
                  className="mb-4 last:mb-0 h-14 w-full flex justify-center transform-gpu animate-decelerate hover:scale-[1.03] px-2 text-center"
                  style={CSSstring(style.button.css)}
                  external
                  noIcon
                >
                  <Text style={getTextStyles("button")}>{l.title}</Text>
                </Link>
              ))}
          </div>
        ) : null}
      </div>

      {showBrand && (
        <Flex
          as={Link}
          // @ts-ignore
          url="/"
          justify="center"
          className="mb-3.5"
          style={CSSstring(style.text.css)}
        >
          <BaseIcon icon={Linkto} width={22} height={36} fill="currentColor" />
        </Flex>
      )}
    </Container>
  );
};

export default PageContent;
