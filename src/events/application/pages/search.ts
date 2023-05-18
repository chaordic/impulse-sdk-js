import { EventConfig } from "@/events/application/ports/event/event";
import { Event } from "@/events/common/services/Event"
import { SearchOutputValidation, searchValidation } from "@/events/application/validations/search.validation";
import { SearchId, SearchItems, SearchQuery } from "@/events/application/schemas/search.schema";

/**
 * Search
 * data that needs to be declared on your store's search view
 */
export class Search extends Event<SearchOutputValidation> {

    constructor(config: EventConfig) {
        super('search', searchValidation, config);
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
    /**
     * List of items searching present in the search
     * @param items {SearchItems}
     * @returns
     */
    items(items: SearchItems): this {
        this.data.items = items;
        return this
    }
}
