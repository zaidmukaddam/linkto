import ThemeCard from "./ThemeCard";
import useUpdatePage from "~/utils/hooks/mutations/useUpdatePage";
import { ChangeEvent, FC, useState } from "react";
import { PageWithMetadata, Theme, useUpdateEffect } from "@linkto/core";

export interface ThemeListProps {
  page: PageWithMetadata;
  themes: Theme[];
}

const ThemeList: FC<ThemeListProps> = ({ page, themes }) => {
  const [selectedTheme, setSelectedTheme] = useState(page.theme.name);

  const { mutate, isLoading } = useUpdatePage();

  const handleThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedTheme(event.currentTarget.value);
  };

  const handleThemeUpdate = () => {
    mutate({
      data: { theme: selectedTheme },
      userId: page?.user.id,
    });
  };

  useUpdateEffect(() => {
    // if selected theme is different from the current theme -> send req
    if (page?.theme.name !== selectedTheme) {
      handleThemeUpdate();
    }
  }, [selectedTheme]);

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-1 xs:gap-6 xl:grid-cols-4 lg:gap-3 2xl:gap-5">
      {themes.map((t) => (
        <ThemeCard
          key={t.id}
          userCurrentTheme={selectedTheme}
          onThemeChange={handleThemeChange}
          disableSelect={isLoading}
          {...t}
        />
      ))}
    </ul>
  );
};

export default ThemeList;
