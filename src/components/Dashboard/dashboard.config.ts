import { WisgetTemplateConfig } from "./dashboard.model";
import { BarChartTemplate } from "./templates/BarChart";
import { BlockTemplate } from "./templates/Block";
import { ListTemplate } from "./templates/List";

export type WidgetType = "COMPARISON" | "METRIC" | "FUNNEL";
export type WidgetPosition = "FULL" | "HALF" | "QUARTER";
export type WidgetTemplate = "LIST" | "PIE_CHART" | "BAR_CHART" | "BLOCK";

export const templateComponent: WisgetTemplateConfig = {
  BLOCK: BlockTemplate,
  LIST: ListTemplate,
  BAR_CHART: BarChartTemplate,
};
