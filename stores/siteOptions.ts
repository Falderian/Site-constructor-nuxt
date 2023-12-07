import { reactive } from "vue";
import { defineStore } from "pinia";
import type { TSiteOptions } from "@/utils/types";

export const useSiteOptions = defineStore("siteOptions", () => {
  const nums = ["One", "Two"];
  const availableOptions = {
    header: nums.map((el) => "header" + el),
    body: nums.map((el) => "body" + el),
    content: nums.map((el) => "content" + el),
    footer: nums.map((el) => "footer" + el),
  };

  const currentSiteOptions = reactive({
    header: availableOptions.header[0],
    body: availableOptions.body[0],
    content: availableOptions.content[0],
    footer: availableOptions.footer[0],
  } as TSiteOptions);

  const setSiteOption = (optionName: string, value: string) => {
    currentSiteOptions[optionName as keyof TSiteOptions] = value;
  };

  return { availableOptions, currentSiteOptions, setSiteOption };
});
