import Link from "../common/Link";
import { useRouter } from "next/router";
import {
  Flex,
  BaseIcon,
  Settings,
  Link as LinkIcon,
  BarChart2,
  Trello,
} from "@linkto/gamut";
import { ctl } from "@linkto/core";
import { Routes } from "~/data/enums/routes";

const PageNavigation: React.FC = () => {
  const { pathname } = useRouter();

  const getActiveLink = (value: string) => {
    const totalNumberOfLinksOnPage = 3;
    const paths = pathname.split("/");

    /**
     * We replace the empty string of the first entry with
     * `links` so we can get a matching value to account
     * for when the pathname is only "/dashboard"
     */
    if (paths.length < totalNumberOfLinksOnPage) {
      paths[0] = paths[0].replace("", "links");
    }

    return paths.includes(value);
  };

  const linkClass =
    "pb-3 pt-1 pl-2 pr-3.5 flex items-center space-x-1.5 border-b-2 hover:text-mauve-1000 active:text-mauve-950";

  return (
    <Flex justify="between" className="mb-10 border-b-2 border-mauve-600">
      <Flex className="space-x-0 xs:space-x-5 transform-gpu translate-y-0.5">
        <Link
          url={Routes.DASHBOARD}
          className={ctl(`
            ${linkClass}
            ${
              getActiveLink("links")
                ? "text-mauve-1000 border-mauve-1000"
                : "text-mauve-950 border-transparent"
            }
          `)}
        >
          <BaseIcon icon={LinkIcon} />

          <span>Links</span>
        </Link>
        <Link
          url={Routes.PAGE}
          className={ctl(`
            ${linkClass}
            ${
              getActiveLink("page")
                ? "text-mauve-1000 border-mauve-1000"
                : "text-mauve-950 border-transparent"
            }
          `)}
        >
          <BaseIcon icon={Trello} />

          <span>Page</span>
        </Link>
        <Link
          url={Routes.STATS}
          className={ctl(`
            ${linkClass}
            ${
              getActiveLink("stats")
                ? "text-mauve-1000 border-mauve-1000"
                : "text-mauve-950 border-transparent"
            }
          `)}
        >
          <BaseIcon icon={BarChart2} />

          <span>Stats</span>
        </Link>
      </Flex>

      <Link
        url={Routes.ACCOUNT}
        className="text-mauveDark-700 pb-1 hover:text-mauve-1000 active:text-mauveDark-600"
      >
        <BaseIcon icon={Settings} size="lg" />
      </Link>
    </Flex>
  );
};

export default PageNavigation;
