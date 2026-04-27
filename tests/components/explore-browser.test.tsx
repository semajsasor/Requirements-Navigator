import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { ExploreBrowser } from "@/components/process/explore-browser";
import {
  processCategories,
  processCountries,
  processGuides,
} from "@/lib/data/processes";

describe("ExploreBrowser", () => {
  it("filters guides and shows an empty state", async () => {
    const user = userEvent.setup();

    render(
      <ExploreBrowser
        processes={processGuides}
        popularProcesses={processGuides.slice(0, 3)}
        categories={processCategories}
        countries={processCountries}
      />,
    );

    expect(screen.getByText(/Popular processes/i)).toBeInTheDocument();

    await user.type(
      screen.getByRole("textbox", { name: /search requirement guides/i }),
      "zzzzzzzzz",
    );

    expect(screen.getByText(/No matching guides found/i)).toBeInTheDocument();
  });
});
