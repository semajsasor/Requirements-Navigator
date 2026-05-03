import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ExploreBrowser } from "@/components/process/explore-browser";
import {
  processCategories,
  processCountries,
  processGuides,
} from "@/lib/data/processes";

describe("ExploreBrowser", () => {
  it("filters guides and shows an empty state", async () => {
    render(
      <ExploreBrowser
        processes={processGuides}
        popularProcesses={processGuides.slice(0, 3)}
        categories={processCategories}
        countries={processCountries}
      />,
    );

    expect(screen.getByText(/Popular processes/i)).toBeInTheDocument();

    fireEvent.change(
      screen.getByRole("textbox", { name: /search requirement guides/i }),
      { target: { value: "zzzzzzzzz" } },
    );

    expect(screen.getByText(/No matching guides found/i)).toBeInTheDocument();
  });
});
