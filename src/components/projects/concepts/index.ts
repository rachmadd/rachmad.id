import { EmbeddedPaymentConcept } from "./EmbeddedPaymentConcept";
import { MicroFrontendConcept } from "./MicroFrontendConcept";
import { MultiplayerConcept } from "./MultiplayerConcept";
import { UILibraryConcept } from "./UILibraryConcept";

export type ConceptKey = "embedded-payment" | "micro-frontend" | "multiplayer" | "ui-library";

export const CONCEPT_COMPONENTS: Record<
  ConceptKey,
  (props: { className?: string }) => React.JSX.Element
> = {
  "embedded-payment": EmbeddedPaymentConcept,
  "micro-frontend": MicroFrontendConcept,
  multiplayer: MultiplayerConcept,
  "ui-library": UILibraryConcept,
};
