import { EventConfig } from "@/events/application/ports/event/event";
import { Event } from "@/events/common/services/Event"
import { EmptySearchInputValidation, emptySearchValidation } from "@/events/application/validations/search.validation";
import { EmptySearchId, EmptySearchQuery } from "@/events/application/schemas/empty-search.schema";

/**
 * EmptySearch
 * data that needs to be declared on your store's empty search view
 */
export class EmptySearch extends Event<EmptySearchInputValidation> {

    constructor(config: EventConfig) {
        super('emptysearch', emptySearchValidation, config);
    }
    /**
     * Identifier string searching your search
     * @param query {EmptySearchQuery}
     * @returns
     */
    query(query: EmptySearchQuery): this {
        this.data.query = query;
        return this
    }
    /**
     * Unique searchId identifier
     * @param searchId {EmptySearchId}
     * @returns
     */
    searchId(searchId: EmptySearchId): this {
        this.data.searchId = searchId;
        return this
    }
}
