import { EventConfig } from "@/events/application/ports/event/event";
import { Event } from "@/events/common/services/Event"
import { EmptySearchInputValidation, searchValidation } from "@/events/application/validations/search-validation";
import { SearchId, SearchQuery } from "@/events/application/schemas/search.schema";

/**
 * EmptySearch
 * data that needs to be declared on your store's empty search view
 */
export class EmptySearch extends Event<EmptySearchInputValidation> {

    constructor(config: EventConfig) {
        super('emptysearch', searchValidation, config);
    }
    /**
     * Identifier string searching your search
     * @param query {SearchQuery}
     * @returns
     */
    query(query: SearchQuery): this {
        this.data.query = query;
        return this
    }
    /**
     * Unique searchId identifier
     * @param searchId {SearchId}
     * @returns
     */
    searchId(searchId: SearchId): this {
        this.data.searchId = searchId;
        return this
    }
}
