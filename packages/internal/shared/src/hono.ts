import * as hono_hono_base from 'hono/hono-base';
import * as hono_types from 'hono/types';
import * as hono_utils_http_status from 'hono/utils/http-status';
import { HttpBindings } from '@hono/node-server';
import * as zod from 'zod';
import { z } from 'zod';
import * as better_call from 'better-call';
import * as drizzle_orm_pg_core from 'drizzle-orm/pg-core';
import { AnyPgColumn } from 'drizzle-orm/pg-core';
import * as drizzle_orm from 'drizzle-orm';
import { InferInsertModel, SQL } from 'drizzle-orm';
import * as better_auth_plugins from 'better-auth/plugins';
import * as better_auth from 'better-auth';
import { BetterAuthOptions } from 'better-auth';

type Env = {
    Bindings: HttpBindings;
};

declare const authPlugins: ({
    id: "customGetProviders";
    endpoints: {
        customGetProviders: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: any;
            } : any>;
            options: {
                method: "GET";
            } & {
                use: any[];
            };
            path: "/get-providers";
        };
    };
} | {
    id: "getAccountInfo";
    endpoints: {
        getAccountInfo: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: ({
                    id: string;
                    provider: string;
                    profile: {
                        id: string;
                        name?: string;
                        email?: string | null;
                        image?: string;
                        emailVerified: boolean;
                    };
                    accountId?: undefined;
                } | {
                    id: string;
                    accountId: string;
                    provider: string;
                    profile: {
                        id: string;
                        name?: string;
                        email?: string | null;
                        image?: string;
                        emailVerified: boolean;
                    } | undefined;
                })[] | null;
            } : ({
                id: string;
                provider: string;
                profile: {
                    id: string;
                    name?: string;
                    email?: string | null;
                    image?: string;
                    emailVerified: boolean;
                };
                accountId?: undefined;
            } | {
                id: string;
                accountId: string;
                provider: string;
                profile: {
                    id: string;
                    name?: string;
                    email?: string | null;
                    image?: string;
                    emailVerified: boolean;
                } | undefined;
            })[] | null>;
            options: {
                method: "GET";
            } & {
                use: any[];
            };
            path: "/get-account-info";
        };
    };
} | {
    id: "oneTimeToken";
    endpoints: {
        generateOneTimeToken: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    token: string;
                };
            } : {
                token: string;
            }>;
            options: {
                method: "GET";
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
            } & {
                use: any[];
            };
            path: "/one-time-token/generate";
        };
        applyOneTimeToken: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    token: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    user: {
                        id: string;
                        name: string;
                        email: string;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                        image?: string | null | undefined;
                    } & Record<string, any>;
                };
            } : {
                user: {
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined;
                } & Record<string, any>;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    token: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                }, {
                    token: string;
                }>;
            } & {
                use: any[];
            };
            path: "/one-time-token/apply";
        };
    };
})[];

declare const achievements: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "achievements";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "achievements";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        userId: drizzle_orm_pg_core.PgColumn<{
            name: "user_id";
            tableName: "achievements";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        type: drizzle_orm_pg_core.PgColumn<{
            name: "type";
            tableName: "achievements";
            dataType: "string";
            columnType: "PgText";
            data: "checking" | "completed" | "incomplete" | "audit" | "received";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: ["checking", "completed", "incomplete", "audit", "received"];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        actionId: drizzle_orm_pg_core.PgColumn<{
            name: "action_id";
            tableName: "achievements";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        progress: drizzle_orm_pg_core.PgColumn<{
            name: "progress";
            tableName: "achievements";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        progressMax: drizzle_orm_pg_core.PgColumn<{
            name: "progress_max";
            tableName: "achievements";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        done: drizzle_orm_pg_core.PgColumn<{
            name: "done";
            tableName: "achievements";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        doneAt: drizzle_orm_pg_core.PgColumn<{
            name: "done_at";
            tableName: "achievements";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        tx: drizzle_orm_pg_core.PgColumn<{
            name: "tx";
            tableName: "achievements";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const achievementsOpenAPISchema: zod.ZodObject<{
    id: zod.ZodString;
    userId: zod.ZodString;
    type: zod.ZodEnum<["checking", "completed", "incomplete", "audit", "received"]>;
    actionId: zod.ZodNumber;
    progress: zod.ZodNumber;
    progressMax: zod.ZodNumber;
    done: zod.ZodBoolean;
    doneAt: zod.ZodNullable<zod.ZodString>;
    tx: zod.ZodNullable<zod.ZodString>;
}, zod.UnknownKeysParam, zod.ZodTypeAny, {
    id: string;
    userId: string;
    type: "checking" | "completed" | "incomplete" | "audit" | "received";
    actionId: number;
    progress: number;
    progressMax: number;
    done: boolean;
    doneAt: string | null;
    tx: string | null;
}, {
    id: string;
    userId: string;
    type: "checking" | "completed" | "incomplete" | "audit" | "received";
    actionId: number;
    progress: number;
    progressMax: number;
    done: boolean;
    doneAt: string | null;
    tx: string | null;
}>;

declare const languageSchema: z.ZodEnum<["en", "ja", "zh-CN", "zh-TW"]>;
declare const conditionItemSchema: z.ZodObject<{
    field: z.ZodEnum<["view", "title", "site_url", "feed_url", "category", "entry_title", "entry_content", "entry_url", "entry_author", "entry_media_length", "entry_attachments_duration", "status"]>;
    operator: z.ZodEnum<["contains", "not_contains", "eq", "not_eq", "gt", "lt", "regex"]>;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
    operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
}, {
    value: string;
    field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
    operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
}>;
type ConditionItem = z.infer<typeof conditionItemSchema>;
declare const actions: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "actions";
    schema: undefined;
    columns: {
        userId: drizzle_orm_pg_core.PgColumn<{
            name: "user_id";
            tableName: "actions";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "created_at";
            tableName: "actions";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        updatedAt: drizzle_orm_pg_core.PgColumn<{
            name: "updated_at";
            tableName: "actions";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        rules: drizzle_orm_pg_core.PgColumn<{
            name: "rules";
            tableName: "actions";
            dataType: "json";
            columnType: "PgJsonb";
            data: {
                name: string;
                condition: {
                    value: string;
                    field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
                    operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
                }[] | {
                    value: string;
                    field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
                    operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
                }[][];
                result: {
                    disabled?: boolean | undefined;
                    translation?: boolean | "en" | "ja" | "zh-CN" | "zh-TW" | undefined;
                    summary?: boolean | undefined;
                    readability?: boolean | undefined;
                    sourceContent?: boolean | undefined;
                    silence?: boolean | undefined;
                    block?: boolean | undefined;
                    star?: boolean | undefined;
                    newEntryNotification?: boolean | undefined;
                    rewriteRules?: {
                        from: string;
                        to: string;
                    }[] | undefined;
                    blockRules?: {
                        value: string | number;
                        field: "title" | "content" | "all" | "author" | "url" | "order";
                        operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
                    }[] | undefined;
                    webhooks?: string[] | undefined;
                };
            }[];
            driverParam: unknown;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            $type: {
                name: string;
                condition: {
                    value: string;
                    field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
                    operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
                }[] | {
                    value: string;
                    field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
                    operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
                }[][];
                result: {
                    disabled?: boolean | undefined;
                    translation?: boolean | "en" | "ja" | "zh-CN" | "zh-TW" | undefined;
                    summary?: boolean | undefined;
                    readability?: boolean | undefined;
                    sourceContent?: boolean | undefined;
                    silence?: boolean | undefined;
                    block?: boolean | undefined;
                    star?: boolean | undefined;
                    newEntryNotification?: boolean | undefined;
                    rewriteRules?: {
                        from: string;
                        to: string;
                    }[] | undefined;
                    blockRules?: {
                        value: string | number;
                        field: "title" | "content" | "all" | "author" | "url" | "order";
                        operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
                    }[] | undefined;
                    webhooks?: string[] | undefined;
                };
            }[];
        }>;
    };
    dialect: "pg";
}>;
declare const actionsItemOpenAPISchema: z.ZodObject<{
    name: z.ZodString;
    condition: z.ZodUnion<[z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<["view", "title", "site_url", "feed_url", "category", "entry_title", "entry_content", "entry_url", "entry_author", "entry_media_length", "entry_attachments_duration", "status"]>;
        operator: z.ZodEnum<["contains", "not_contains", "eq", "not_eq", "gt", "lt", "regex"]>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
        operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
    }, {
        value: string;
        field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
        operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
    }>, "many">, z.ZodArray<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<["view", "title", "site_url", "feed_url", "category", "entry_title", "entry_content", "entry_url", "entry_author", "entry_media_length", "entry_attachments_duration", "status"]>;
        operator: z.ZodEnum<["contains", "not_contains", "eq", "not_eq", "gt", "lt", "regex"]>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
        operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
    }, {
        value: string;
        field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
        operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
    }>, "many">, "many">]>;
    result: z.ZodObject<{
        disabled: z.ZodOptional<z.ZodBoolean>;
        translation: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["en", "ja", "zh-CN", "zh-TW"]>, z.ZodBoolean]>>;
        summary: z.ZodOptional<z.ZodBoolean>;
        readability: z.ZodOptional<z.ZodBoolean>;
        sourceContent: z.ZodOptional<z.ZodBoolean>;
        silence: z.ZodOptional<z.ZodBoolean>;
        block: z.ZodOptional<z.ZodBoolean>;
        star: z.ZodOptional<z.ZodBoolean>;
        newEntryNotification: z.ZodOptional<z.ZodBoolean>;
        rewriteRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            to: string;
        }, {
            from: string;
            to: string;
        }>, "many">>;
        blockRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field: z.ZodEnum<["all", "title", "content", "author", "url", "order"]>;
            operator: z.ZodEnum<["contains", "not_contains", "eq", "not_eq", "gt", "lt", "regex"]>;
            value: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
        }, "strip", z.ZodTypeAny, {
            value: string | number;
            field: "title" | "content" | "all" | "author" | "url" | "order";
            operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
        }, {
            value: string | number;
            field: "title" | "content" | "all" | "author" | "url" | "order";
            operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
        }>, "many">>;
        webhooks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        disabled?: boolean | undefined;
        translation?: boolean | "en" | "ja" | "zh-CN" | "zh-TW" | undefined;
        summary?: boolean | undefined;
        readability?: boolean | undefined;
        sourceContent?: boolean | undefined;
        silence?: boolean | undefined;
        block?: boolean | undefined;
        star?: boolean | undefined;
        newEntryNotification?: boolean | undefined;
        rewriteRules?: {
            from: string;
            to: string;
        }[] | undefined;
        blockRules?: {
            value: string | number;
            field: "title" | "content" | "all" | "author" | "url" | "order";
            operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
        }[] | undefined;
        webhooks?: string[] | undefined;
    }, {
        disabled?: boolean | undefined;
        translation?: boolean | "en" | "ja" | "zh-CN" | "zh-TW" | undefined;
        summary?: boolean | undefined;
        readability?: boolean | undefined;
        sourceContent?: boolean | undefined;
        silence?: boolean | undefined;
        block?: boolean | undefined;
        star?: boolean | undefined;
        newEntryNotification?: boolean | undefined;
        rewriteRules?: {
            from: string;
            to: string;
        }[] | undefined;
        blockRules?: {
            value: string | number;
            field: "title" | "content" | "all" | "author" | "url" | "order";
            operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
        }[] | undefined;
        webhooks?: string[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    name: string;
    condition: {
        value: string;
        field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
        operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
    }[] | {
        value: string;
        field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
        operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
    }[][];
    result: {
        disabled?: boolean | undefined;
        translation?: boolean | "en" | "ja" | "zh-CN" | "zh-TW" | undefined;
        summary?: boolean | undefined;
        readability?: boolean | undefined;
        sourceContent?: boolean | undefined;
        silence?: boolean | undefined;
        block?: boolean | undefined;
        star?: boolean | undefined;
        newEntryNotification?: boolean | undefined;
        rewriteRules?: {
            from: string;
            to: string;
        }[] | undefined;
        blockRules?: {
            value: string | number;
            field: "title" | "content" | "all" | "author" | "url" | "order";
            operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
        }[] | undefined;
        webhooks?: string[] | undefined;
    };
}, {
    name: string;
    condition: {
        value: string;
        field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
        operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
    }[] | {
        value: string;
        field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
        operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
    }[][];
    result: {
        disabled?: boolean | undefined;
        translation?: boolean | "en" | "ja" | "zh-CN" | "zh-TW" | undefined;
        summary?: boolean | undefined;
        readability?: boolean | undefined;
        sourceContent?: boolean | undefined;
        silence?: boolean | undefined;
        block?: boolean | undefined;
        star?: boolean | undefined;
        newEntryNotification?: boolean | undefined;
        rewriteRules?: {
            from: string;
            to: string;
        }[] | undefined;
        blockRules?: {
            value: string | number;
            field: "title" | "content" | "all" | "author" | "url" | "order";
            operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
        }[] | undefined;
        webhooks?: string[] | undefined;
    };
}>;
type ActionItem = z.infer<typeof actionsItemOpenAPISchema>;
declare const actionsOpenAPISchema: z.ZodObject<Omit<{
    userId: z.ZodString;
    createdAt: z.ZodNullable<z.ZodString>;
    updatedAt: z.ZodNullable<z.ZodString>;
    rules: z.ZodNullable<z.ZodType<string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null;
    } | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null;
    } | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null>>;
}, "rules"> & {
    rules: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        condition: z.ZodUnion<[z.ZodArray<z.ZodObject<{
            field: z.ZodEnum<["view", "title", "site_url", "feed_url", "category", "entry_title", "entry_content", "entry_url", "entry_author", "entry_media_length", "entry_attachments_duration", "status"]>;
            operator: z.ZodEnum<["contains", "not_contains", "eq", "not_eq", "gt", "lt", "regex"]>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
            operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
        }, {
            value: string;
            field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
            operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
        }>, "many">, z.ZodArray<z.ZodArray<z.ZodObject<{
            field: z.ZodEnum<["view", "title", "site_url", "feed_url", "category", "entry_title", "entry_content", "entry_url", "entry_author", "entry_media_length", "entry_attachments_duration", "status"]>;
            operator: z.ZodEnum<["contains", "not_contains", "eq", "not_eq", "gt", "lt", "regex"]>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
            operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
        }, {
            value: string;
            field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
            operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
        }>, "many">, "many">]>;
        result: z.ZodObject<{
            disabled: z.ZodOptional<z.ZodBoolean>;
            translation: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["en", "ja", "zh-CN", "zh-TW"]>, z.ZodBoolean]>>;
            summary: z.ZodOptional<z.ZodBoolean>;
            readability: z.ZodOptional<z.ZodBoolean>;
            sourceContent: z.ZodOptional<z.ZodBoolean>;
            silence: z.ZodOptional<z.ZodBoolean>;
            block: z.ZodOptional<z.ZodBoolean>;
            star: z.ZodOptional<z.ZodBoolean>;
            newEntryNotification: z.ZodOptional<z.ZodBoolean>;
            rewriteRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                to: string;
            }, {
                from: string;
                to: string;
            }>, "many">>;
            blockRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field: z.ZodEnum<["all", "title", "content", "author", "url", "order"]>;
                operator: z.ZodEnum<["contains", "not_contains", "eq", "not_eq", "gt", "lt", "regex"]>;
                value: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
            }, "strip", z.ZodTypeAny, {
                value: string | number;
                field: "title" | "content" | "all" | "author" | "url" | "order";
                operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
            }, {
                value: string | number;
                field: "title" | "content" | "all" | "author" | "url" | "order";
                operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
            }>, "many">>;
            webhooks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            disabled?: boolean | undefined;
            translation?: boolean | "en" | "ja" | "zh-CN" | "zh-TW" | undefined;
            summary?: boolean | undefined;
            readability?: boolean | undefined;
            sourceContent?: boolean | undefined;
            silence?: boolean | undefined;
            block?: boolean | undefined;
            star?: boolean | undefined;
            newEntryNotification?: boolean | undefined;
            rewriteRules?: {
                from: string;
                to: string;
            }[] | undefined;
            blockRules?: {
                value: string | number;
                field: "title" | "content" | "all" | "author" | "url" | "order";
                operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
            }[] | undefined;
            webhooks?: string[] | undefined;
        }, {
            disabled?: boolean | undefined;
            translation?: boolean | "en" | "ja" | "zh-CN" | "zh-TW" | undefined;
            summary?: boolean | undefined;
            readability?: boolean | undefined;
            sourceContent?: boolean | undefined;
            silence?: boolean | undefined;
            block?: boolean | undefined;
            star?: boolean | undefined;
            newEntryNotification?: boolean | undefined;
            rewriteRules?: {
                from: string;
                to: string;
            }[] | undefined;
            blockRules?: {
                value: string | number;
                field: "title" | "content" | "all" | "author" | "url" | "order";
                operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
            }[] | undefined;
            webhooks?: string[] | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        condition: {
            value: string;
            field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
            operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
        }[] | {
            value: string;
            field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
            operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
        }[][];
        result: {
            disabled?: boolean | undefined;
            translation?: boolean | "en" | "ja" | "zh-CN" | "zh-TW" | undefined;
            summary?: boolean | undefined;
            readability?: boolean | undefined;
            sourceContent?: boolean | undefined;
            silence?: boolean | undefined;
            block?: boolean | undefined;
            star?: boolean | undefined;
            newEntryNotification?: boolean | undefined;
            rewriteRules?: {
                from: string;
                to: string;
            }[] | undefined;
            blockRules?: {
                value: string | number;
                field: "title" | "content" | "all" | "author" | "url" | "order";
                operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
            }[] | undefined;
            webhooks?: string[] | undefined;
        };
    }, {
        name: string;
        condition: {
            value: string;
            field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
            operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
        }[] | {
            value: string;
            field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
            operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
        }[][];
        result: {
            disabled?: boolean | undefined;
            translation?: boolean | "en" | "ja" | "zh-CN" | "zh-TW" | undefined;
            summary?: boolean | undefined;
            readability?: boolean | undefined;
            sourceContent?: boolean | undefined;
            silence?: boolean | undefined;
            block?: boolean | undefined;
            star?: boolean | undefined;
            newEntryNotification?: boolean | undefined;
            rewriteRules?: {
                from: string;
                to: string;
            }[] | undefined;
            blockRules?: {
                value: string | number;
                field: "title" | "content" | "all" | "author" | "url" | "order";
                operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
            }[] | undefined;
            webhooks?: string[] | undefined;
        };
    }>, "many">>>;
}, "strip", z.ZodTypeAny, {
    createdAt: string | null;
    updatedAt: string | null;
    userId: string;
    rules?: {
        name: string;
        condition: {
            value: string;
            field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
            operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
        }[] | {
            value: string;
            field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
            operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
        }[][];
        result: {
            disabled?: boolean | undefined;
            translation?: boolean | "en" | "ja" | "zh-CN" | "zh-TW" | undefined;
            summary?: boolean | undefined;
            readability?: boolean | undefined;
            sourceContent?: boolean | undefined;
            silence?: boolean | undefined;
            block?: boolean | undefined;
            star?: boolean | undefined;
            newEntryNotification?: boolean | undefined;
            rewriteRules?: {
                from: string;
                to: string;
            }[] | undefined;
            blockRules?: {
                value: string | number;
                field: "title" | "content" | "all" | "author" | "url" | "order";
                operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
            }[] | undefined;
            webhooks?: string[] | undefined;
        };
    }[] | null | undefined;
}, {
    createdAt: string | null;
    updatedAt: string | null;
    userId: string;
    rules?: {
        name: string;
        condition: {
            value: string;
            field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
            operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
        }[] | {
            value: string;
            field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
            operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
        }[][];
        result: {
            disabled?: boolean | undefined;
            translation?: boolean | "en" | "ja" | "zh-CN" | "zh-TW" | undefined;
            summary?: boolean | undefined;
            readability?: boolean | undefined;
            sourceContent?: boolean | undefined;
            silence?: boolean | undefined;
            block?: boolean | undefined;
            star?: boolean | undefined;
            newEntryNotification?: boolean | undefined;
            rewriteRules?: {
                from: string;
                to: string;
            }[] | undefined;
            blockRules?: {
                value: string | number;
                field: "title" | "content" | "all" | "author" | "url" | "order";
                operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
            }[] | undefined;
            webhooks?: string[] | undefined;
        };
    }[] | null | undefined;
}>;
declare const actionsRelations: drizzle_orm.Relations<"actions", {
    users: drizzle_orm.One<"user", true>;
}>;
type ActionsModel = z.infer<typeof actionsOpenAPISchema>;
type SettingsModel = Exclude<z.infer<typeof actionsItemOpenAPISchema>["result"], undefined>;

declare const detailModelSchema: z.ZodNullable<z.ZodObject<{
    "Invitations count": z.ZodNumber;
    "Purchase lists cost": z.ZodNumber;
    "Total tip amount": z.ZodNumber;
    "Feeds subscriptions count": z.ZodNumber;
    "Lists subscriptions count": z.ZodNumber;
    "Inbox subscriptions count": z.ZodNumber;
    "Recent read count in the last month": z.ZodNumber;
    "Mint count": z.ZodNumber;
    "Claimed feeds count": z.ZodNumber;
    "Claimed feeds subscriptions count": z.ZodNumber;
    "Lists with more than 1 feed count": z.ZodNumber;
    "Created lists subscriptions count": z.ZodNumber;
    "Created lists income amount": z.ZodNumber;
    "GitHub Community Contributions": z.ZodNumber;
    "Invitations count Rank": z.ZodNumber;
    "Purchase lists cost Rank": z.ZodNumber;
    "Total tip amount Rank": z.ZodNumber;
    "Feeds subscriptions count Rank": z.ZodNumber;
    "Lists subscriptions count Rank": z.ZodNumber;
    "Inbox subscriptions count Rank": z.ZodNumber;
    "Recent read count in the last month Rank": z.ZodNumber;
    "Mint count Rank": z.ZodNumber;
    "Claimed feeds count Rank": z.ZodNumber;
    "Claimed feeds subscriptions count Rank": z.ZodNumber;
    "Lists with more than 1 feed count Rank": z.ZodNumber;
    "Created lists subscriptions count Rank": z.ZodNumber;
    "Created lists income amount Rank": z.ZodNumber;
    "GitHub Community Contributions Rank": z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    "Invitations count": number;
    "Purchase lists cost": number;
    "Total tip amount": number;
    "Feeds subscriptions count": number;
    "Lists subscriptions count": number;
    "Inbox subscriptions count": number;
    "Recent read count in the last month": number;
    "Mint count": number;
    "Claimed feeds count": number;
    "Claimed feeds subscriptions count": number;
    "Lists with more than 1 feed count": number;
    "Created lists subscriptions count": number;
    "Created lists income amount": number;
    "GitHub Community Contributions": number;
    "Invitations count Rank": number;
    "Purchase lists cost Rank": number;
    "Total tip amount Rank": number;
    "Feeds subscriptions count Rank": number;
    "Lists subscriptions count Rank": number;
    "Inbox subscriptions count Rank": number;
    "Recent read count in the last month Rank": number;
    "Mint count Rank": number;
    "Claimed feeds count Rank": number;
    "Claimed feeds subscriptions count Rank": number;
    "Lists with more than 1 feed count Rank": number;
    "Created lists subscriptions count Rank": number;
    "Created lists income amount Rank": number;
    "GitHub Community Contributions Rank": number;
}, {
    "Invitations count": number;
    "Purchase lists cost": number;
    "Total tip amount": number;
    "Feeds subscriptions count": number;
    "Lists subscriptions count": number;
    "Inbox subscriptions count": number;
    "Recent read count in the last month": number;
    "Mint count": number;
    "Claimed feeds count": number;
    "Claimed feeds subscriptions count": number;
    "Lists with more than 1 feed count": number;
    "Created lists subscriptions count": number;
    "Created lists income amount": number;
    "GitHub Community Contributions": number;
    "Invitations count Rank": number;
    "Purchase lists cost Rank": number;
    "Total tip amount Rank": number;
    "Feeds subscriptions count Rank": number;
    "Lists subscriptions count Rank": number;
    "Inbox subscriptions count Rank": number;
    "Recent read count in the last month Rank": number;
    "Mint count Rank": number;
    "Claimed feeds count Rank": number;
    "Claimed feeds subscriptions count Rank": number;
    "Lists with more than 1 feed count Rank": number;
    "Created lists subscriptions count Rank": number;
    "Created lists income amount Rank": number;
    "GitHub Community Contributions Rank": number;
}>>;
type DetailModel = z.infer<typeof detailModelSchema>;
declare const activityEnum: readonly ["public_beta"];
type AirdropActivity = typeof activityEnum[number];
declare const airdrops: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "airdrops";
    schema: undefined;
    columns: {
        activity: drizzle_orm_pg_core.PgColumn<{
            name: "activity";
            tableName: "airdrops";
            dataType: "string";
            columnType: "PgText";
            data: "public_beta";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: ["public_beta"];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        userId: drizzle_orm_pg_core.PgColumn<{
            name: "user_id";
            tableName: "airdrops";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        amount: drizzle_orm_pg_core.PgColumn<{
            name: "amount";
            tableName: "airdrops";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        rank: drizzle_orm_pg_core.PgColumn<{
            name: "rank";
            tableName: "airdrops";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        detail: drizzle_orm_pg_core.PgColumn<{
            name: "detail";
            tableName: "airdrops";
            dataType: "json";
            columnType: "PgJsonb";
            data: {
                "Invitations count": number;
                "Purchase lists cost": number;
                "Total tip amount": number;
                "Feeds subscriptions count": number;
                "Lists subscriptions count": number;
                "Inbox subscriptions count": number;
                "Recent read count in the last month": number;
                "Mint count": number;
                "Claimed feeds count": number;
                "Claimed feeds subscriptions count": number;
                "Lists with more than 1 feed count": number;
                "Created lists subscriptions count": number;
                "Created lists income amount": number;
                "GitHub Community Contributions": number;
                "Invitations count Rank": number;
                "Purchase lists cost Rank": number;
                "Total tip amount Rank": number;
                "Feeds subscriptions count Rank": number;
                "Lists subscriptions count Rank": number;
                "Inbox subscriptions count Rank": number;
                "Recent read count in the last month Rank": number;
                "Mint count Rank": number;
                "Claimed feeds count Rank": number;
                "Claimed feeds subscriptions count Rank": number;
                "Lists with more than 1 feed count Rank": number;
                "Created lists subscriptions count Rank": number;
                "Created lists income amount Rank": number;
                "GitHub Community Contributions Rank": number;
            } | null;
            driverParam: unknown;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            $type: {
                "Invitations count": number;
                "Purchase lists cost": number;
                "Total tip amount": number;
                "Feeds subscriptions count": number;
                "Lists subscriptions count": number;
                "Inbox subscriptions count": number;
                "Recent read count in the last month": number;
                "Mint count": number;
                "Claimed feeds count": number;
                "Claimed feeds subscriptions count": number;
                "Lists with more than 1 feed count": number;
                "Created lists subscriptions count": number;
                "Created lists income amount": number;
                "GitHub Community Contributions": number;
                "Invitations count Rank": number;
                "Purchase lists cost Rank": number;
                "Total tip amount Rank": number;
                "Feeds subscriptions count Rank": number;
                "Lists subscriptions count Rank": number;
                "Inbox subscriptions count Rank": number;
                "Recent read count in the last month Rank": number;
                "Mint count Rank": number;
                "Claimed feeds count Rank": number;
                "Claimed feeds subscriptions count Rank": number;
                "Lists with more than 1 feed count Rank": number;
                "Created lists subscriptions count Rank": number;
                "Created lists income amount Rank": number;
                "GitHub Community Contributions Rank": number;
            } | null;
        }>;
        verify: drizzle_orm_pg_core.PgColumn<{
            name: "verify";
            tableName: "airdrops";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        tx: drizzle_orm_pg_core.PgColumn<{
            name: "tx";
            tableName: "airdrops";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const airdropsOpenAPISchema: z.ZodObject<Omit<{
    activity: z.ZodEnum<["public_beta"]>;
    userId: z.ZodString;
    amount: z.ZodString;
    rank: z.ZodNullable<z.ZodString>;
    detail: z.ZodNullable<z.ZodType<string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null;
    } | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null;
    } | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null>>;
    verify: z.ZodNullable<z.ZodString>;
    tx: z.ZodNullable<z.ZodString>;
}, "detail"> & {
    detail: z.ZodNullable<z.ZodObject<{
        "Invitations count": z.ZodNumber;
        "Purchase lists cost": z.ZodNumber;
        "Total tip amount": z.ZodNumber;
        "Feeds subscriptions count": z.ZodNumber;
        "Lists subscriptions count": z.ZodNumber;
        "Inbox subscriptions count": z.ZodNumber;
        "Recent read count in the last month": z.ZodNumber;
        "Mint count": z.ZodNumber;
        "Claimed feeds count": z.ZodNumber;
        "Claimed feeds subscriptions count": z.ZodNumber;
        "Lists with more than 1 feed count": z.ZodNumber;
        "Created lists subscriptions count": z.ZodNumber;
        "Created lists income amount": z.ZodNumber;
        "GitHub Community Contributions": z.ZodNumber;
        "Invitations count Rank": z.ZodNumber;
        "Purchase lists cost Rank": z.ZodNumber;
        "Total tip amount Rank": z.ZodNumber;
        "Feeds subscriptions count Rank": z.ZodNumber;
        "Lists subscriptions count Rank": z.ZodNumber;
        "Inbox subscriptions count Rank": z.ZodNumber;
        "Recent read count in the last month Rank": z.ZodNumber;
        "Mint count Rank": z.ZodNumber;
        "Claimed feeds count Rank": z.ZodNumber;
        "Claimed feeds subscriptions count Rank": z.ZodNumber;
        "Lists with more than 1 feed count Rank": z.ZodNumber;
        "Created lists subscriptions count Rank": z.ZodNumber;
        "Created lists income amount Rank": z.ZodNumber;
        "GitHub Community Contributions Rank": z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        "Invitations count": number;
        "Purchase lists cost": number;
        "Total tip amount": number;
        "Feeds subscriptions count": number;
        "Lists subscriptions count": number;
        "Inbox subscriptions count": number;
        "Recent read count in the last month": number;
        "Mint count": number;
        "Claimed feeds count": number;
        "Claimed feeds subscriptions count": number;
        "Lists with more than 1 feed count": number;
        "Created lists subscriptions count": number;
        "Created lists income amount": number;
        "GitHub Community Contributions": number;
        "Invitations count Rank": number;
        "Purchase lists cost Rank": number;
        "Total tip amount Rank": number;
        "Feeds subscriptions count Rank": number;
        "Lists subscriptions count Rank": number;
        "Inbox subscriptions count Rank": number;
        "Recent read count in the last month Rank": number;
        "Mint count Rank": number;
        "Claimed feeds count Rank": number;
        "Claimed feeds subscriptions count Rank": number;
        "Lists with more than 1 feed count Rank": number;
        "Created lists subscriptions count Rank": number;
        "Created lists income amount Rank": number;
        "GitHub Community Contributions Rank": number;
    }, {
        "Invitations count": number;
        "Purchase lists cost": number;
        "Total tip amount": number;
        "Feeds subscriptions count": number;
        "Lists subscriptions count": number;
        "Inbox subscriptions count": number;
        "Recent read count in the last month": number;
        "Mint count": number;
        "Claimed feeds count": number;
        "Claimed feeds subscriptions count": number;
        "Lists with more than 1 feed count": number;
        "Created lists subscriptions count": number;
        "Created lists income amount": number;
        "GitHub Community Contributions": number;
        "Invitations count Rank": number;
        "Purchase lists cost Rank": number;
        "Total tip amount Rank": number;
        "Feeds subscriptions count Rank": number;
        "Lists subscriptions count Rank": number;
        "Inbox subscriptions count Rank": number;
        "Recent read count in the last month Rank": number;
        "Mint count Rank": number;
        "Claimed feeds count Rank": number;
        "Claimed feeds subscriptions count Rank": number;
        "Lists with more than 1 feed count Rank": number;
        "Created lists subscriptions count Rank": number;
        "Created lists income amount Rank": number;
        "GitHub Community Contributions Rank": number;
    }>>;
}, "strip", z.ZodTypeAny, {
    userId: string;
    tx: string | null;
    activity: "public_beta";
    amount: string;
    rank: string | null;
    detail: {
        "Invitations count": number;
        "Purchase lists cost": number;
        "Total tip amount": number;
        "Feeds subscriptions count": number;
        "Lists subscriptions count": number;
        "Inbox subscriptions count": number;
        "Recent read count in the last month": number;
        "Mint count": number;
        "Claimed feeds count": number;
        "Claimed feeds subscriptions count": number;
        "Lists with more than 1 feed count": number;
        "Created lists subscriptions count": number;
        "Created lists income amount": number;
        "GitHub Community Contributions": number;
        "Invitations count Rank": number;
        "Purchase lists cost Rank": number;
        "Total tip amount Rank": number;
        "Feeds subscriptions count Rank": number;
        "Lists subscriptions count Rank": number;
        "Inbox subscriptions count Rank": number;
        "Recent read count in the last month Rank": number;
        "Mint count Rank": number;
        "Claimed feeds count Rank": number;
        "Claimed feeds subscriptions count Rank": number;
        "Lists with more than 1 feed count Rank": number;
        "Created lists subscriptions count Rank": number;
        "Created lists income amount Rank": number;
        "GitHub Community Contributions Rank": number;
    } | null;
    verify: string | null;
}, {
    userId: string;
    tx: string | null;
    activity: "public_beta";
    amount: string;
    rank: string | null;
    detail: {
        "Invitations count": number;
        "Purchase lists cost": number;
        "Total tip amount": number;
        "Feeds subscriptions count": number;
        "Lists subscriptions count": number;
        "Inbox subscriptions count": number;
        "Recent read count in the last month": number;
        "Mint count": number;
        "Claimed feeds count": number;
        "Claimed feeds subscriptions count": number;
        "Lists with more than 1 feed count": number;
        "Created lists subscriptions count": number;
        "Created lists income amount": number;
        "GitHub Community Contributions": number;
        "Invitations count Rank": number;
        "Purchase lists cost Rank": number;
        "Total tip amount Rank": number;
        "Feeds subscriptions count Rank": number;
        "Lists subscriptions count Rank": number;
        "Inbox subscriptions count Rank": number;
        "Recent read count in the last month Rank": number;
        "Mint count Rank": number;
        "Claimed feeds count Rank": number;
        "Claimed feeds subscriptions count Rank": number;
        "Lists with more than 1 feed count Rank": number;
        "Created lists subscriptions count Rank": number;
        "Created lists income amount Rank": number;
        "GitHub Community Contributions Rank": number;
    } | null;
    verify: string | null;
}>;

declare const captcha: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "captcha";
    schema: undefined;
    columns: {
        userId: drizzle_orm_pg_core.PgColumn<{
            name: "user_id";
            tableName: "captcha";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        failedCount: drizzle_orm_pg_core.PgColumn<{
            name: "failed_count";
            tableName: "captcha";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        passedCount: drizzle_orm_pg_core.PgColumn<{
            name: "passed_count";
            tableName: "captcha";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;

declare const collections: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "collections";
    schema: undefined;
    columns: {
        userId: drizzle_orm_pg_core.PgColumn<{
            name: "user_id";
            tableName: "collections";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        feedId: drizzle_orm_pg_core.PgColumn<{
            name: "feed_id";
            tableName: "collections";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        entryId: drizzle_orm_pg_core.PgColumn<{
            name: "entry_id";
            tableName: "collections";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "created_at";
            tableName: "collections";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        view: drizzle_orm_pg_core.PgColumn<{
            name: "view";
            tableName: "collections";
            dataType: "number";
            columnType: "PgSmallInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const collectionsOpenAPISchema: zod.ZodObject<{
    userId: zod.ZodString;
    feedId: zod.ZodString;
    entryId: zod.ZodString;
    createdAt: zod.ZodString;
    view: zod.ZodNumber;
}, zod.UnknownKeysParam, zod.ZodTypeAny, {
    createdAt: string;
    userId: string;
    view: number;
    feedId: string;
    entryId: string;
}, {
    createdAt: string;
    userId: string;
    view: number;
    feedId: string;
    entryId: string;
}>;
declare const collectionsRelations: drizzle_orm.Relations<"collections", {
    users: drizzle_orm.One<"user", true>;
    entries: drizzle_orm.One<"entries", true>;
    feeds: drizzle_orm.One<"feeds", true>;
}>;

type MediaModel = {
    url: string;
    type: "photo" | "video";
    preview_image_url?: string;
    width?: number;
    height?: number;
    blurhash?: string;
};
type AttachmentsModel = {
    url: string;
    duration_in_seconds?: number | string;
    mime_type?: string;
    size_in_bytes?: number;
    title?: string;
};
type ExtraModel = {
    links?: {
        url: string;
        type: string;
        content_html?: string;
    }[];
};
declare const CommonEntryFields: {
    id: drizzle_orm.HasRuntimeDefault<drizzle_orm.HasDefault<drizzle_orm.IsPrimaryKey<drizzle_orm.NotNull<drizzle_orm_pg_core.PgTextBuilderInitial<"id", [string, ...string[]]>>>>>;
    title: drizzle_orm_pg_core.PgTextBuilderInitial<"title", [string, ...string[]]>;
    url: drizzle_orm_pg_core.PgTextBuilderInitial<"url", [string, ...string[]]>;
    content: drizzle_orm_pg_core.PgTextBuilderInitial<"content", [string, ...string[]]>;
    description: drizzle_orm_pg_core.PgTextBuilderInitial<"description", [string, ...string[]]>;
    guid: drizzle_orm.NotNull<drizzle_orm_pg_core.PgTextBuilderInitial<"guid", [string, ...string[]]>>;
    author: drizzle_orm_pg_core.PgTextBuilderInitial<"author", [string, ...string[]]>;
    authorUrl: drizzle_orm_pg_core.PgTextBuilderInitial<"author_url", [string, ...string[]]>;
    authorAvatar: drizzle_orm_pg_core.PgTextBuilderInitial<"author_avatar", [string, ...string[]]>;
    insertedAt: drizzle_orm.NotNull<drizzle_orm_pg_core.PgTimestampBuilderInitial<"inserted_at">>;
    publishedAt: drizzle_orm.NotNull<drizzle_orm_pg_core.PgTimestampBuilderInitial<"published_at">>;
    media: drizzle_orm.$Type<drizzle_orm_pg_core.PgJsonbBuilderInitial<"media">, MediaModel[]>;
    categories: drizzle_orm_pg_core.PgArrayBuilder<{
        name: "categories";
        dataType: "array";
        columnType: "PgArray";
        data: string[];
        driverParam: string | string[];
        enumValues: [string, ...string[]];
        size: undefined;
        baseBuilder: {
            name: "categories";
            dataType: "string";
            columnType: "PgText";
            data: string;
            enumValues: [string, ...string[]];
            driverParam: string;
        };
    }, {
        name: "categories";
        dataType: "string";
        columnType: "PgText";
        data: string;
        enumValues: [string, ...string[]];
        driverParam: string;
    }>;
    attachments: drizzle_orm.$Type<drizzle_orm_pg_core.PgJsonbBuilderInitial<"attachments">, AttachmentsModel[]>;
    extra: drizzle_orm.$Type<drizzle_orm_pg_core.PgJsonbBuilderInitial<"extra">, ExtraModel>;
    language: drizzle_orm_pg_core.PgTextBuilderInitial<"language", [string, ...string[]]>;
};
declare const entries: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "entries";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "entries";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        title: drizzle_orm_pg_core.PgColumn<{
            name: "title";
            tableName: "entries";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        url: drizzle_orm_pg_core.PgColumn<{
            name: "url";
            tableName: "entries";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        content: drizzle_orm_pg_core.PgColumn<{
            name: "content";
            tableName: "entries";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        description: drizzle_orm_pg_core.PgColumn<{
            name: "description";
            tableName: "entries";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        guid: drizzle_orm_pg_core.PgColumn<{
            name: "guid";
            tableName: "entries";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        author: drizzle_orm_pg_core.PgColumn<{
            name: "author";
            tableName: "entries";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        authorUrl: drizzle_orm_pg_core.PgColumn<{
            name: "author_url";
            tableName: "entries";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        authorAvatar: drizzle_orm_pg_core.PgColumn<{
            name: "author_avatar";
            tableName: "entries";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        insertedAt: drizzle_orm_pg_core.PgColumn<{
            name: "inserted_at";
            tableName: "entries";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        publishedAt: drizzle_orm_pg_core.PgColumn<{
            name: "published_at";
            tableName: "entries";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        media: drizzle_orm_pg_core.PgColumn<{
            name: "media";
            tableName: "entries";
            dataType: "json";
            columnType: "PgJsonb";
            data: MediaModel[];
            driverParam: unknown;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            $type: MediaModel[];
        }>;
        categories: drizzle_orm_pg_core.PgColumn<{
            name: "categories";
            tableName: "entries";
            dataType: "array";
            columnType: "PgArray";
            data: string[];
            driverParam: string | string[];
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: drizzle_orm.Column<{
                name: "categories";
                tableName: "entries";
                dataType: "string";
                columnType: "PgText";
                data: string;
                driverParam: string;
                notNull: false;
                hasDefault: false;
                isPrimaryKey: false;
                isAutoincrement: false;
                hasRuntimeDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
                identity: undefined;
                generated: undefined;
            }, {}, {}>;
            identity: undefined;
            generated: undefined;
        }, {}, {
            baseBuilder: drizzle_orm_pg_core.PgColumnBuilder<{
                name: "categories";
                dataType: "string";
                columnType: "PgText";
                data: string;
                enumValues: [string, ...string[]];
                driverParam: string;
            }, {}, {}, drizzle_orm.ColumnBuilderExtraConfig>;
            size: undefined;
        }>;
        attachments: drizzle_orm_pg_core.PgColumn<{
            name: "attachments";
            tableName: "entries";
            dataType: "json";
            columnType: "PgJsonb";
            data: AttachmentsModel[];
            driverParam: unknown;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            $type: AttachmentsModel[];
        }>;
        extra: drizzle_orm_pg_core.PgColumn<{
            name: "extra";
            tableName: "entries";
            dataType: "json";
            columnType: "PgJsonb";
            data: ExtraModel;
            driverParam: unknown;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            $type: ExtraModel;
        }>;
        language: drizzle_orm_pg_core.PgColumn<{
            name: "language";
            tableName: "entries";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        feedId: drizzle_orm_pg_core.PgColumn<{
            name: "feed_id";
            tableName: "entries";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const attachmentsZodSchema: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
    url: z.ZodString;
    duration_in_seconds: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    mime_type: z.ZodOptional<z.ZodString>;
    size_in_bytes: z.ZodOptional<z.ZodNumber>;
    title: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    url: string;
    title?: string | undefined;
    duration_in_seconds?: string | number | undefined;
    mime_type?: string | undefined;
    size_in_bytes?: number | undefined;
}, {
    url: string;
    title?: string | undefined;
    duration_in_seconds?: string | number | undefined;
    mime_type?: string | undefined;
    size_in_bytes?: number | undefined;
}>, "many">>>;
declare const mediaZodSchema: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
    url: z.ZodString;
    type: z.ZodEnum<["photo", "video"]>;
    width: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    preview_image_url: z.ZodOptional<z.ZodString>;
    blurhash: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "photo" | "video";
    url: string;
    width?: number | undefined;
    height?: number | undefined;
    preview_image_url?: string | undefined;
    blurhash?: string | undefined;
}, {
    type: "photo" | "video";
    url: string;
    width?: number | undefined;
    height?: number | undefined;
    preview_image_url?: string | undefined;
    blurhash?: string | undefined;
}>, "many">>>;
declare const extraZodSchema: z.ZodNullable<z.ZodOptional<z.ZodObject<{
    links: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        type: z.ZodString;
        content_html: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: string;
        url: string;
        content_html?: string | undefined;
    }, {
        type: string;
        url: string;
        content_html?: string | undefined;
    }>, "many">>>;
}, "strip", z.ZodTypeAny, {
    links?: {
        type: string;
        url: string;
        content_html?: string | undefined;
    }[] | null | undefined;
}, {
    links?: {
        type: string;
        url: string;
        content_html?: string | undefined;
    }[] | null | undefined;
}>>>;
declare const entriesOpenAPISchema: z.ZodObject<Omit<{
    id: z.ZodString;
    title: z.ZodNullable<z.ZodString>;
    url: z.ZodNullable<z.ZodString>;
    content: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    guid: z.ZodString;
    author: z.ZodNullable<z.ZodString>;
    authorUrl: z.ZodNullable<z.ZodString>;
    authorAvatar: z.ZodNullable<z.ZodString>;
    insertedAt: z.ZodString;
    publishedAt: z.ZodString;
    media: z.ZodNullable<z.ZodType<string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null;
    } | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null;
    } | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null>>;
    categories: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    attachments: z.ZodNullable<z.ZodType<string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null;
    } | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null;
    } | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null>>;
    extra: z.ZodNullable<z.ZodType<string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null;
    } | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null;
    } | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null>>;
    language: z.ZodNullable<z.ZodString>;
    feedId: z.ZodString;
}, "media" | "attachments" | "extra"> & {
    attachments: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        duration_in_seconds: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        mime_type: z.ZodOptional<z.ZodString>;
        size_in_bytes: z.ZodOptional<z.ZodNumber>;
        title: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        title?: string | undefined;
        duration_in_seconds?: string | number | undefined;
        mime_type?: string | undefined;
        size_in_bytes?: number | undefined;
    }, {
        url: string;
        title?: string | undefined;
        duration_in_seconds?: string | number | undefined;
        mime_type?: string | undefined;
        size_in_bytes?: number | undefined;
    }>, "many">>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        type: z.ZodEnum<["photo", "video"]>;
        width: z.ZodOptional<z.ZodNumber>;
        height: z.ZodOptional<z.ZodNumber>;
        preview_image_url: z.ZodOptional<z.ZodString>;
        blurhash: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "photo" | "video";
        url: string;
        width?: number | undefined;
        height?: number | undefined;
        preview_image_url?: string | undefined;
        blurhash?: string | undefined;
    }, {
        type: "photo" | "video";
        url: string;
        width?: number | undefined;
        height?: number | undefined;
        preview_image_url?: string | undefined;
        blurhash?: string | undefined;
    }>, "many">>>;
    extra: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        links: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
            url: z.ZodString;
            type: z.ZodString;
            content_html: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            url: string;
            content_html?: string | undefined;
        }, {
            type: string;
            url: string;
            content_html?: string | undefined;
        }>, "many">>>;
    }, "strip", z.ZodTypeAny, {
        links?: {
            type: string;
            url: string;
            content_html?: string | undefined;
        }[] | null | undefined;
    }, {
        links?: {
            type: string;
            url: string;
            content_html?: string | undefined;
        }[] | null | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    description: string | null;
    title: string | null;
    content: string | null;
    author: string | null;
    url: string | null;
    language: string | null;
    feedId: string;
    guid: string;
    categories: string[] | null;
    authorUrl: string | null;
    authorAvatar: string | null;
    insertedAt: string;
    publishedAt: string;
    media?: {
        type: "photo" | "video";
        url: string;
        width?: number | undefined;
        height?: number | undefined;
        preview_image_url?: string | undefined;
        blurhash?: string | undefined;
    }[] | null | undefined;
    attachments?: {
        url: string;
        title?: string | undefined;
        duration_in_seconds?: string | number | undefined;
        mime_type?: string | undefined;
        size_in_bytes?: number | undefined;
    }[] | null | undefined;
    extra?: {
        links?: {
            type: string;
            url: string;
            content_html?: string | undefined;
        }[] | null | undefined;
    } | null | undefined;
}, {
    id: string;
    description: string | null;
    title: string | null;
    content: string | null;
    author: string | null;
    url: string | null;
    language: string | null;
    feedId: string;
    guid: string;
    categories: string[] | null;
    authorUrl: string | null;
    authorAvatar: string | null;
    insertedAt: string;
    publishedAt: string;
    media?: {
        type: "photo" | "video";
        url: string;
        width?: number | undefined;
        height?: number | undefined;
        preview_image_url?: string | undefined;
        blurhash?: string | undefined;
    }[] | null | undefined;
    attachments?: {
        url: string;
        title?: string | undefined;
        duration_in_seconds?: string | number | undefined;
        mime_type?: string | undefined;
        size_in_bytes?: number | undefined;
    }[] | null | undefined;
    extra?: {
        links?: {
            type: string;
            url: string;
            content_html?: string | undefined;
        }[] | null | undefined;
    } | null | undefined;
}>;
declare const entriesRelations: drizzle_orm.Relations<"entries", {
    feeds: drizzle_orm.One<"feeds", true>;
    collections: drizzle_orm.Many<"collections">;
    feedPowerTokens: drizzle_orm.One<"feedPowerTokens", true>;
}>;
type EntriesModel = InferInsertModel<typeof entries> & {
    attachments?: AttachmentsModel[] | null;
    media?: MediaModel[] | null;
};
declare const urlReads: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "urlReads";
    schema: undefined;
    columns: {
        url: drizzle_orm_pg_core.PgColumn<{
            name: "url";
            tableName: "urlReads";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        userIds: drizzle_orm_pg_core.PgColumn<{
            name: "user_ids";
            tableName: "urlReads";
            dataType: "array";
            columnType: "PgArray";
            data: string[];
            driverParam: string | string[];
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: drizzle_orm.Column<{
                name: "user_ids";
                tableName: "urlReads";
                dataType: "string";
                columnType: "PgText";
                data: string;
                driverParam: string;
                notNull: false;
                hasDefault: false;
                isPrimaryKey: false;
                isAutoincrement: false;
                hasRuntimeDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
                identity: undefined;
                generated: undefined;
            }, {}, {}>;
            identity: undefined;
            generated: undefined;
        }, {}, {
            baseBuilder: drizzle_orm_pg_core.PgColumnBuilder<{
                name: "user_ids";
                dataType: "string";
                columnType: "PgText";
                data: string;
                enumValues: [string, ...string[]];
                driverParam: string;
            }, {}, {}, drizzle_orm.ColumnBuilderExtraConfig>;
            size: undefined;
        }>;
        count: drizzle_orm_pg_core.PgColumn<{
            name: "count";
            tableName: "urlReads";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
type UrlReadsModel = InferInsertModel<typeof urlReads>;
declare const urlReadsOpenAPISchema: z.ZodObject<{
    url: z.ZodString;
    userIds: z.ZodArray<z.ZodString, "many">;
    count: z.ZodNumber;
}, z.UnknownKeysParam, z.ZodTypeAny, {
    url: string;
    userIds: string[];
    count: number;
}, {
    url: string;
    userIds: string[];
    count: number;
}>;

declare const feedAnalytics: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "feed_analytics";
    schema: undefined;
    columns: {
        feedId: drizzle_orm_pg_core.PgColumn<{
            name: "feed_id";
            tableName: "feed_analytics";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        updatesPerWeek: drizzle_orm_pg_core.PgColumn<{
            name: "updates_per_week";
            tableName: "feed_analytics";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        subscriptionCount: drizzle_orm_pg_core.PgColumn<{
            name: "subscription_count";
            tableName: "feed_analytics";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        latestEntryPublishedAt: drizzle_orm_pg_core.PgColumn<{
            name: "latest_entry_published_at";
            tableName: "feed_analytics";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        view: drizzle_orm_pg_core.PgColumn<{
            name: "view";
            tableName: "feed_analytics";
            dataType: "number";
            columnType: "PgSmallInt";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const feedAnalyticsOpenAPISchema: zod.ZodObject<{
    feedId: zod.ZodString;
    updatesPerWeek: zod.ZodNullable<zod.ZodNumber>;
    subscriptionCount: zod.ZodNullable<zod.ZodNumber>;
    latestEntryPublishedAt: zod.ZodNullable<zod.ZodString>;
    view: zod.ZodNullable<zod.ZodNumber>;
}, zod.UnknownKeysParam, zod.ZodTypeAny, {
    view: number | null;
    feedId: string;
    updatesPerWeek: number | null;
    subscriptionCount: number | null;
    latestEntryPublishedAt: string | null;
}, {
    view: number | null;
    feedId: string;
    updatesPerWeek: number | null;
    subscriptionCount: number | null;
    latestEntryPublishedAt: string | null;
}>;
declare const feedAnalyticsRelations: drizzle_orm.Relations<"feed_analytics", {
    feed: drizzle_orm.One<"feeds", true>;
}>;

declare const feeds: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "feeds";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "feeds";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        url: drizzle_orm_pg_core.PgColumn<{
            name: "url";
            tableName: "feeds";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        title: drizzle_orm_pg_core.PgColumn<{
            name: "title";
            tableName: "feeds";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        description: drizzle_orm_pg_core.PgColumn<{
            name: "description";
            tableName: "feeds";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        siteUrl: drizzle_orm_pg_core.PgColumn<{
            name: "site_url";
            tableName: "feeds";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        image: drizzle_orm_pg_core.PgColumn<{
            name: "image";
            tableName: "feeds";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        checkedAt: drizzle_orm_pg_core.PgColumn<{
            name: "checked_at";
            tableName: "feeds";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        lastModifiedHeader: drizzle_orm_pg_core.PgColumn<{
            name: "last_modified_header";
            tableName: "feeds";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        etagHeader: drizzle_orm_pg_core.PgColumn<{
            name: "etag_header";
            tableName: "feeds";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        ttl: drizzle_orm_pg_core.PgColumn<{
            name: "ttl";
            tableName: "feeds";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        errorMessage: drizzle_orm_pg_core.PgColumn<{
            name: "error_message";
            tableName: "feeds";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        errorAt: drizzle_orm_pg_core.PgColumn<{
            name: "error_at";
            tableName: "feeds";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        ownerUserId: drizzle_orm_pg_core.PgColumn<{
            name: "owner_user_id";
            tableName: "feeds";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        language: drizzle_orm_pg_core.PgColumn<{
            name: "language";
            tableName: "feeds";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        migrateTo: drizzle_orm_pg_core.PgColumn<{
            name: "migrate_to";
            tableName: "feeds";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        rsshubRoute: drizzle_orm_pg_core.PgColumn<{
            name: "rsshub_route";
            tableName: "feeds";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        rsshubNamespace: drizzle_orm_pg_core.PgColumn<{
            name: "rsshub_namespace";
            tableName: "feeds";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        nsfw: drizzle_orm_pg_core.PgColumn<{
            name: "nsfw";
            tableName: "feeds";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const feedsOpenAPISchema: zod.ZodObject<{
    id: zod.ZodString;
    url: zod.ZodString;
    title: zod.ZodNullable<zod.ZodString>;
    description: zod.ZodNullable<zod.ZodString>;
    siteUrl: zod.ZodNullable<zod.ZodString>;
    image: zod.ZodNullable<zod.ZodString>;
    checkedAt: zod.ZodString;
    lastModifiedHeader: zod.ZodNullable<zod.ZodString>;
    etagHeader: zod.ZodNullable<zod.ZodString>;
    ttl: zod.ZodNullable<zod.ZodNumber>;
    errorMessage: zod.ZodNullable<zod.ZodString>;
    errorAt: zod.ZodNullable<zod.ZodString>;
    ownerUserId: zod.ZodNullable<zod.ZodString>;
    language: zod.ZodNullable<zod.ZodString>;
    migrateTo: zod.ZodNullable<zod.ZodString>;
    rsshubRoute: zod.ZodNullable<zod.ZodString>;
    rsshubNamespace: zod.ZodNullable<zod.ZodString>;
    nsfw: zod.ZodNullable<zod.ZodBoolean>;
}, zod.UnknownKeysParam, zod.ZodTypeAny, {
    id: string;
    image: string | null;
    description: string | null;
    title: string | null;
    url: string;
    siteUrl: string | null;
    checkedAt: string;
    lastModifiedHeader: string | null;
    etagHeader: string | null;
    ttl: number | null;
    errorMessage: string | null;
    errorAt: string | null;
    ownerUserId: string | null;
    language: string | null;
    migrateTo: string | null;
    rsshubRoute: string | null;
    rsshubNamespace: string | null;
    nsfw: boolean | null;
}, {
    id: string;
    image: string | null;
    description: string | null;
    title: string | null;
    url: string;
    siteUrl: string | null;
    checkedAt: string;
    lastModifiedHeader: string | null;
    etagHeader: string | null;
    ttl: number | null;
    errorMessage: string | null;
    errorAt: string | null;
    ownerUserId: string | null;
    language: string | null;
    migrateTo: string | null;
    rsshubRoute: string | null;
    rsshubNamespace: string | null;
    nsfw: boolean | null;
}>;
declare const feedsRelations: drizzle_orm.Relations<"feeds", {
    subscriptions: drizzle_orm.Many<"subscriptions">;
    entries: drizzle_orm.Many<"entries">;
    owner: drizzle_orm.One<"user", false>;
    migrateTo: drizzle_orm.One<"feeds", false>;
    trendingFeeds: drizzle_orm.Many<"trendings_feeds">;
}>;
type FeedModel = InferInsertModel<typeof feeds>;

declare const subscriptions: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "subscriptions";
    schema: undefined;
    columns: {
        userId: drizzle_orm_pg_core.PgColumn<{
            name: "user_id";
            tableName: "subscriptions";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        feedId: drizzle_orm_pg_core.PgColumn<{
            name: "feed_id";
            tableName: "subscriptions";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        view: drizzle_orm_pg_core.PgColumn<{
            name: "view";
            tableName: "subscriptions";
            dataType: "number";
            columnType: "PgSmallInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        category: drizzle_orm_pg_core.PgColumn<{
            name: "category";
            tableName: "subscriptions";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        title: drizzle_orm_pg_core.PgColumn<{
            name: "title";
            tableName: "subscriptions";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "created_at";
            tableName: "subscriptions";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        isPrivate: drizzle_orm_pg_core.PgColumn<{
            name: "is_private";
            tableName: "subscriptions";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const subscriptionsOpenAPISchema: zod.ZodObject<{
    userId: zod.ZodString;
    feedId: zod.ZodString;
    view: zod.ZodNumber;
    category: zod.ZodNullable<zod.ZodString>;
    title: zod.ZodNullable<zod.ZodString>;
    createdAt: zod.ZodString;
    isPrivate: zod.ZodBoolean;
}, zod.UnknownKeysParam, zod.ZodTypeAny, {
    createdAt: string;
    userId: string;
    title: string | null;
    view: number;
    category: string | null;
    feedId: string;
    isPrivate: boolean;
}, {
    createdAt: string;
    userId: string;
    title: string | null;
    view: number;
    category: string | null;
    feedId: string;
    isPrivate: boolean;
}>;
declare const subscriptionsRelations: drizzle_orm.Relations<"subscriptions", {
    users: drizzle_orm.One<"user", true>;
    feeds: drizzle_orm.One<"feeds", true>;
    timeline: drizzle_orm.Many<"timeline">;
    rsshubUsage: drizzle_orm.One<"rsshub_usage", true>;
}>;

declare const inboxesEntries: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "inboxes_entries";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "inboxes_entries";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        title: drizzle_orm_pg_core.PgColumn<{
            name: "title";
            tableName: "inboxes_entries";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        url: drizzle_orm_pg_core.PgColumn<{
            name: "url";
            tableName: "inboxes_entries";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        content: drizzle_orm_pg_core.PgColumn<{
            name: "content";
            tableName: "inboxes_entries";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        description: drizzle_orm_pg_core.PgColumn<{
            name: "description";
            tableName: "inboxes_entries";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        guid: drizzle_orm_pg_core.PgColumn<{
            name: "guid";
            tableName: "inboxes_entries";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        author: drizzle_orm_pg_core.PgColumn<{
            name: "author";
            tableName: "inboxes_entries";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        authorUrl: drizzle_orm_pg_core.PgColumn<{
            name: "author_url";
            tableName: "inboxes_entries";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        authorAvatar: drizzle_orm_pg_core.PgColumn<{
            name: "author_avatar";
            tableName: "inboxes_entries";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        insertedAt: drizzle_orm_pg_core.PgColumn<{
            name: "inserted_at";
            tableName: "inboxes_entries";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        publishedAt: drizzle_orm_pg_core.PgColumn<{
            name: "published_at";
            tableName: "inboxes_entries";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        media: drizzle_orm_pg_core.PgColumn<{
            name: "media";
            tableName: "inboxes_entries";
            dataType: "json";
            columnType: "PgJsonb";
            data: MediaModel[];
            driverParam: unknown;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            $type: MediaModel[];
        }>;
        categories: drizzle_orm_pg_core.PgColumn<{
            name: "categories";
            tableName: "inboxes_entries";
            dataType: "array";
            columnType: "PgArray";
            data: string[];
            driverParam: string | string[];
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: drizzle_orm.Column<{
                name: "categories";
                tableName: "inboxes_entries";
                dataType: "string";
                columnType: "PgText";
                data: string;
                driverParam: string;
                notNull: false;
                hasDefault: false;
                isPrimaryKey: false;
                isAutoincrement: false;
                hasRuntimeDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
                identity: undefined;
                generated: undefined;
            }, {}, {}>;
            identity: undefined;
            generated: undefined;
        }, {}, {
            baseBuilder: drizzle_orm_pg_core.PgColumnBuilder<{
                name: "categories";
                dataType: "string";
                columnType: "PgText";
                data: string;
                enumValues: [string, ...string[]];
                driverParam: string;
            }, {}, {}, drizzle_orm.ColumnBuilderExtraConfig>;
            size: undefined;
        }>;
        attachments: drizzle_orm_pg_core.PgColumn<{
            name: "attachments";
            tableName: "inboxes_entries";
            dataType: "json";
            columnType: "PgJsonb";
            data: AttachmentsModel[];
            driverParam: unknown;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            $type: AttachmentsModel[];
        }>;
        extra: drizzle_orm_pg_core.PgColumn<{
            name: "extra";
            tableName: "inboxes_entries";
            dataType: "json";
            columnType: "PgJsonb";
            data: ExtraModel;
            driverParam: unknown;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            $type: ExtraModel;
        }>;
        language: drizzle_orm_pg_core.PgColumn<{
            name: "language";
            tableName: "inboxes_entries";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        inboxHandle: drizzle_orm_pg_core.PgColumn<{
            name: "inbox_handle";
            tableName: "inboxes_entries";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        read: drizzle_orm_pg_core.PgColumn<{
            name: "read";
            tableName: "inboxes_entries";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const inboxesEntriesOpenAPISchema: z.ZodObject<Omit<{
    id: z.ZodString;
    title: z.ZodNullable<z.ZodString>;
    url: z.ZodNullable<z.ZodString>;
    content: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    guid: z.ZodString;
    author: z.ZodNullable<z.ZodString>;
    authorUrl: z.ZodNullable<z.ZodString>;
    authorAvatar: z.ZodNullable<z.ZodString>;
    insertedAt: z.ZodString;
    publishedAt: z.ZodString;
    media: z.ZodNullable<z.ZodType<string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null;
    } | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null;
    } | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null>>;
    categories: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    attachments: z.ZodNullable<z.ZodType<string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null;
    } | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null;
    } | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null>>;
    extra: z.ZodNullable<z.ZodType<string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null;
    } | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null;
    } | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null>>;
    language: z.ZodNullable<z.ZodString>;
    inboxHandle: z.ZodString;
    read: z.ZodNullable<z.ZodBoolean>;
}, "media" | "attachments" | "extra"> & {
    attachments: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        duration_in_seconds: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        mime_type: z.ZodOptional<z.ZodString>;
        size_in_bytes: z.ZodOptional<z.ZodNumber>;
        title: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        title?: string | undefined;
        duration_in_seconds?: string | number | undefined;
        mime_type?: string | undefined;
        size_in_bytes?: number | undefined;
    }, {
        url: string;
        title?: string | undefined;
        duration_in_seconds?: string | number | undefined;
        mime_type?: string | undefined;
        size_in_bytes?: number | undefined;
    }>, "many">>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        type: z.ZodEnum<["photo", "video"]>;
        width: z.ZodOptional<z.ZodNumber>;
        height: z.ZodOptional<z.ZodNumber>;
        preview_image_url: z.ZodOptional<z.ZodString>;
        blurhash: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "photo" | "video";
        url: string;
        width?: number | undefined;
        height?: number | undefined;
        preview_image_url?: string | undefined;
        blurhash?: string | undefined;
    }, {
        type: "photo" | "video";
        url: string;
        width?: number | undefined;
        height?: number | undefined;
        preview_image_url?: string | undefined;
        blurhash?: string | undefined;
    }>, "many">>>;
    extra: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        links: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
            url: z.ZodString;
            type: z.ZodString;
            content_html: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            url: string;
            content_html?: string | undefined;
        }, {
            type: string;
            url: string;
            content_html?: string | undefined;
        }>, "many">>>;
    }, "strip", z.ZodTypeAny, {
        links?: {
            type: string;
            url: string;
            content_html?: string | undefined;
        }[] | null | undefined;
    }, {
        links?: {
            type: string;
            url: string;
            content_html?: string | undefined;
        }[] | null | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    description: string | null;
    title: string | null;
    content: string | null;
    author: string | null;
    url: string | null;
    language: string | null;
    guid: string;
    categories: string[] | null;
    authorUrl: string | null;
    authorAvatar: string | null;
    insertedAt: string;
    publishedAt: string;
    read: boolean | null;
    inboxHandle: string;
    media?: {
        type: "photo" | "video";
        url: string;
        width?: number | undefined;
        height?: number | undefined;
        preview_image_url?: string | undefined;
        blurhash?: string | undefined;
    }[] | null | undefined;
    attachments?: {
        url: string;
        title?: string | undefined;
        duration_in_seconds?: string | number | undefined;
        mime_type?: string | undefined;
        size_in_bytes?: number | undefined;
    }[] | null | undefined;
    extra?: {
        links?: {
            type: string;
            url: string;
            content_html?: string | undefined;
        }[] | null | undefined;
    } | null | undefined;
}, {
    id: string;
    description: string | null;
    title: string | null;
    content: string | null;
    author: string | null;
    url: string | null;
    language: string | null;
    guid: string;
    categories: string[] | null;
    authorUrl: string | null;
    authorAvatar: string | null;
    insertedAt: string;
    publishedAt: string;
    read: boolean | null;
    inboxHandle: string;
    media?: {
        type: "photo" | "video";
        url: string;
        width?: number | undefined;
        height?: number | undefined;
        preview_image_url?: string | undefined;
        blurhash?: string | undefined;
    }[] | null | undefined;
    attachments?: {
        url: string;
        title?: string | undefined;
        duration_in_seconds?: string | number | undefined;
        mime_type?: string | undefined;
        size_in_bytes?: number | undefined;
    }[] | null | undefined;
    extra?: {
        links?: {
            type: string;
            url: string;
            content_html?: string | undefined;
        }[] | null | undefined;
    } | null | undefined;
}>;
declare const inboxesEntriesInsertOpenAPISchema: z.ZodObject<Omit<{
    id: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    language: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    guid: z.ZodString;
    media: z.ZodOptional<z.ZodNullable<z.ZodType<string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null;
    } | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null;
    } | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null>>>;
    categories: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString, "many">>>;
    attachments: z.ZodOptional<z.ZodNullable<z.ZodType<string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null;
    } | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null;
    } | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null>>>;
    extra: z.ZodOptional<z.ZodNullable<z.ZodType<string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null;
    } | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | (string | number | boolean | /*elided*/ any | /*elided*/ any | null)[] | null;
    } | (string | number | boolean | {
        [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null;
    } | /*elided*/ any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null>>>;
    authorUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    authorAvatar: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    insertedAt: z.ZodString;
    publishedAt: z.ZodString;
    read: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    inboxHandle: z.ZodString;
}, "id" | "media" | "attachments" | "extra" | "insertedAt" | "publishedAt" | "inboxHandle"> & {
    attachments: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        duration_in_seconds: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        mime_type: z.ZodOptional<z.ZodString>;
        size_in_bytes: z.ZodOptional<z.ZodNumber>;
        title: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        title?: string | undefined;
        duration_in_seconds?: string | number | undefined;
        mime_type?: string | undefined;
        size_in_bytes?: number | undefined;
    }, {
        url: string;
        title?: string | undefined;
        duration_in_seconds?: string | number | undefined;
        mime_type?: string | undefined;
        size_in_bytes?: number | undefined;
    }>, "many">>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        type: z.ZodEnum<["photo", "video"]>;
        width: z.ZodOptional<z.ZodNumber>;
        height: z.ZodOptional<z.ZodNumber>;
        preview_image_url: z.ZodOptional<z.ZodString>;
        blurhash: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "photo" | "video";
        url: string;
        width?: number | undefined;
        height?: number | undefined;
        preview_image_url?: string | undefined;
        blurhash?: string | undefined;
    }, {
        type: "photo" | "video";
        url: string;
        width?: number | undefined;
        height?: number | undefined;
        preview_image_url?: string | undefined;
        blurhash?: string | undefined;
    }>, "many">>>;
    extra: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        links: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
            url: z.ZodString;
            type: z.ZodString;
            content_html: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            url: string;
            content_html?: string | undefined;
        }, {
            type: string;
            url: string;
            content_html?: string | undefined;
        }>, "many">>>;
    }, "strip", z.ZodTypeAny, {
        links?: {
            type: string;
            url: string;
            content_html?: string | undefined;
        }[] | null | undefined;
    }, {
        links?: {
            type: string;
            url: string;
            content_html?: string | undefined;
        }[] | null | undefined;
    }>>>;
    publishedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    guid: string;
    publishedAt: string;
    description?: string | null | undefined;
    title?: string | null | undefined;
    content?: string | null | undefined;
    author?: string | null | undefined;
    url?: string | null | undefined;
    language?: string | null | undefined;
    media?: {
        type: "photo" | "video";
        url: string;
        width?: number | undefined;
        height?: number | undefined;
        preview_image_url?: string | undefined;
        blurhash?: string | undefined;
    }[] | null | undefined;
    categories?: string[] | null | undefined;
    attachments?: {
        url: string;
        title?: string | undefined;
        duration_in_seconds?: string | number | undefined;
        mime_type?: string | undefined;
        size_in_bytes?: number | undefined;
    }[] | null | undefined;
    extra?: {
        links?: {
            type: string;
            url: string;
            content_html?: string | undefined;
        }[] | null | undefined;
    } | null | undefined;
    authorUrl?: string | null | undefined;
    authorAvatar?: string | null | undefined;
    read?: boolean | null | undefined;
}, {
    guid: string;
    publishedAt: string;
    description?: string | null | undefined;
    title?: string | null | undefined;
    content?: string | null | undefined;
    author?: string | null | undefined;
    url?: string | null | undefined;
    language?: string | null | undefined;
    media?: {
        type: "photo" | "video";
        url: string;
        width?: number | undefined;
        height?: number | undefined;
        preview_image_url?: string | undefined;
        blurhash?: string | undefined;
    }[] | null | undefined;
    categories?: string[] | null | undefined;
    attachments?: {
        url: string;
        title?: string | undefined;
        duration_in_seconds?: string | number | undefined;
        mime_type?: string | undefined;
        size_in_bytes?: number | undefined;
    }[] | null | undefined;
    extra?: {
        links?: {
            type: string;
            url: string;
            content_html?: string | undefined;
        }[] | null | undefined;
    } | null | undefined;
    authorUrl?: string | null | undefined;
    authorAvatar?: string | null | undefined;
    read?: boolean | null | undefined;
}>;
declare const inboxesEntriesRelations: drizzle_orm.Relations<"inboxes_entries", {
    inboxes: drizzle_orm.One<"inboxes", true>;
}>;
type inboxesEntriesModel = InferInsertModel<typeof inboxesEntries> & {
    attachments?: AttachmentsModel[] | null;
    media?: MediaModel[] | null;
};

declare const inboxes: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "inboxes";
    schema: undefined;
    columns: {
        userId: drizzle_orm_pg_core.PgColumn<{
            name: "user_id";
            tableName: "inboxes";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        handle: drizzle_orm_pg_core.PgColumn<{
            name: "handle";
            tableName: "inboxes";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        secret: drizzle_orm_pg_core.PgColumn<{
            name: "secret";
            tableName: "inboxes";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        title: drizzle_orm_pg_core.PgColumn<{
            name: "title";
            tableName: "inboxes";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const inboxesOpenAPISchema: z.ZodObject<{
    userId: z.ZodString;
    handle: z.ZodString;
    secret: z.ZodString;
    title: z.ZodNullable<z.ZodString>;
}, z.UnknownKeysParam, z.ZodTypeAny, {
    handle: string;
    userId: string;
    title: string | null;
    secret: string;
}, {
    handle: string;
    userId: string;
    title: string | null;
    secret: string;
}>;
declare const inboxesRelations: drizzle_orm.Relations<"inboxes", {
    users: drizzle_orm.One<"user", true>;
    entries: drizzle_orm.Many<"inboxes_entries">;
}>;
declare const inboxHandleSchema: z.ZodString;

declare const invitations: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "invitations";
    schema: undefined;
    columns: {
        code: drizzle_orm_pg_core.PgColumn<{
            name: "code";
            tableName: "invitations";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "created_at";
            tableName: "invitations";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        usedAt: drizzle_orm_pg_core.PgColumn<{
            name: "used_at";
            tableName: "invitations";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        fromUserId: drizzle_orm_pg_core.PgColumn<{
            name: "from_user_id";
            tableName: "invitations";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        toUserId: drizzle_orm_pg_core.PgColumn<{
            name: "to_user_id";
            tableName: "invitations";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const invitationsOpenAPISchema: zod.ZodObject<{
    code: zod.ZodString;
    createdAt: zod.ZodNullable<zod.ZodString>;
    usedAt: zod.ZodNullable<zod.ZodString>;
    fromUserId: zod.ZodString;
    toUserId: zod.ZodNullable<zod.ZodString>;
}, zod.UnknownKeysParam, zod.ZodTypeAny, {
    code: string;
    createdAt: string | null;
    usedAt: string | null;
    fromUserId: string;
    toUserId: string | null;
}, {
    code: string;
    createdAt: string | null;
    usedAt: string | null;
    fromUserId: string;
    toUserId: string | null;
}>;
declare const invitationsRelations: drizzle_orm.Relations<"invitations", {
    users: drizzle_orm.One<"user", false>;
}>;

declare const listAnalytics: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "list_analytics";
    schema: undefined;
    columns: {
        listId: drizzle_orm_pg_core.PgColumn<{
            name: "list_id";
            tableName: "list_analytics";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        subscriptionCount: drizzle_orm_pg_core.PgColumn<{
            name: "subscription_count";
            tableName: "list_analytics";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const listAnalyticsOpenAPISchema: zod.ZodObject<{
    listId: zod.ZodString;
    subscriptionCount: zod.ZodNullable<zod.ZodNumber>;
}, zod.UnknownKeysParam, zod.ZodTypeAny, {
    subscriptionCount: number | null;
    listId: string;
}, {
    subscriptionCount: number | null;
    listId: string;
}>;
declare const listAnalyticsRelations: drizzle_orm.Relations<"list_analytics", {
    list: drizzle_orm.One<"lists", true>;
}>;

declare const lists: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "lists";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "lists";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        feedIds: drizzle_orm_pg_core.PgColumn<{
            name: "feed_ids";
            tableName: "lists";
            dataType: "array";
            columnType: "PgArray";
            data: string[];
            driverParam: string | string[];
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: drizzle_orm.Column<{
                name: "feed_ids";
                tableName: "lists";
                dataType: "string";
                columnType: "PgText";
                data: string;
                driverParam: string;
                notNull: false;
                hasDefault: false;
                isPrimaryKey: false;
                isAutoincrement: false;
                hasRuntimeDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
                identity: undefined;
                generated: undefined;
            }, {}, {}>;
            identity: undefined;
            generated: undefined;
        }, {}, {
            baseBuilder: drizzle_orm_pg_core.PgColumnBuilder<{
                name: "feed_ids";
                dataType: "string";
                columnType: "PgText";
                data: string;
                enumValues: [string, ...string[]];
                driverParam: string;
            }, {}, {}, drizzle_orm.ColumnBuilderExtraConfig>;
            size: undefined;
        }>;
        title: drizzle_orm_pg_core.PgColumn<{
            name: "title";
            tableName: "lists";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        description: drizzle_orm_pg_core.PgColumn<{
            name: "description";
            tableName: "lists";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        image: drizzle_orm_pg_core.PgColumn<{
            name: "image";
            tableName: "lists";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        view: drizzle_orm_pg_core.PgColumn<{
            name: "view";
            tableName: "lists";
            dataType: "number";
            columnType: "PgSmallInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        fee: drizzle_orm_pg_core.PgColumn<{
            name: "fee";
            tableName: "lists";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        language: drizzle_orm_pg_core.PgColumn<{
            name: "language";
            tableName: "lists";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        ownerUserId: drizzle_orm_pg_core.PgColumn<{
            name: "owner_user_id";
            tableName: "lists";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "created_at";
            tableName: "lists";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        updatedAt: drizzle_orm_pg_core.PgColumn<{
            name: "updated_at";
            tableName: "lists";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const listsOpenAPISchema: zod.ZodObject<{
    id: zod.ZodString;
    feedIds: zod.ZodArray<zod.ZodString, "many">;
    title: zod.ZodString;
    description: zod.ZodNullable<zod.ZodString>;
    image: zod.ZodNullable<zod.ZodString>;
    view: zod.ZodNumber;
    fee: zod.ZodNumber;
    language: zod.ZodNullable<zod.ZodString>;
    ownerUserId: zod.ZodString;
    createdAt: zod.ZodNullable<zod.ZodString>;
    updatedAt: zod.ZodNullable<zod.ZodString>;
}, zod.UnknownKeysParam, zod.ZodTypeAny, {
    id: string;
    image: string | null;
    createdAt: string | null;
    updatedAt: string | null;
    description: string | null;
    title: string;
    view: number;
    ownerUserId: string;
    language: string | null;
    feedIds: string[];
    fee: number;
}, {
    id: string;
    image: string | null;
    createdAt: string | null;
    updatedAt: string | null;
    description: string | null;
    title: string;
    view: number;
    ownerUserId: string;
    language: string | null;
    feedIds: string[];
    fee: number;
}>;
declare const listsRelations: drizzle_orm.Relations<"lists", {
    owner: drizzle_orm.One<"user", true>;
    listsSubscriptions: drizzle_orm.Many<"lists_subscriptions">;
}>;
type ListModel = InferInsertModel<typeof lists>;

declare const listsSubscriptions: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "lists_subscriptions";
    schema: undefined;
    columns: {
        userId: drizzle_orm_pg_core.PgColumn<{
            name: "user_id";
            tableName: "lists_subscriptions";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        listId: drizzle_orm_pg_core.PgColumn<{
            name: "list_id";
            tableName: "lists_subscriptions";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        view: drizzle_orm_pg_core.PgColumn<{
            name: "view";
            tableName: "lists_subscriptions";
            dataType: "number";
            columnType: "PgSmallInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        title: drizzle_orm_pg_core.PgColumn<{
            name: "title";
            tableName: "lists_subscriptions";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "created_at";
            tableName: "lists_subscriptions";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        isPrivate: drizzle_orm_pg_core.PgColumn<{
            name: "is_private";
            tableName: "lists_subscriptions";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const listsSubscriptionsOpenAPISchema: zod.ZodObject<{
    userId: zod.ZodString;
    listId: zod.ZodString;
    view: zod.ZodNumber;
    title: zod.ZodNullable<zod.ZodString>;
    createdAt: zod.ZodString;
    isPrivate: zod.ZodBoolean;
}, zod.UnknownKeysParam, zod.ZodTypeAny, {
    createdAt: string;
    userId: string;
    title: string | null;
    view: number;
    isPrivate: boolean;
    listId: string;
}, {
    createdAt: string;
    userId: string;
    title: string | null;
    view: number;
    isPrivate: boolean;
    listId: string;
}>;
declare const listsSubscriptionsRelations: drizzle_orm.Relations<"lists_subscriptions", {
    users: drizzle_orm.One<"user", true>;
    lists: drizzle_orm.One<"lists", true>;
}>;

declare const messaging: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "messaging";
    schema: undefined;
    columns: {
        userId: drizzle_orm_pg_core.PgColumn<{
            name: "user_id";
            tableName: "messaging";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        token: drizzle_orm_pg_core.PgColumn<{
            name: "token";
            tableName: "messaging";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        channel: drizzle_orm_pg_core.PgColumn<{
            name: "channel";
            tableName: "messaging";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const messagingOpenAPISchema: z.ZodObject<Omit<{
    userId: z.ZodNullable<z.ZodString>;
    token: z.ZodString;
    channel: z.ZodString;
}, "channel"> & {
    channel: z.ZodEnum<["macos", "windows", "linux", "ios", "android", "web", "desktop"]>;
}, "strip", z.ZodTypeAny, {
    userId: string | null;
    token: string;
    channel: "macos" | "windows" | "linux" | "ios" | "android" | "web" | "desktop";
}, {
    userId: string | null;
    token: string;
    channel: "macos" | "windows" | "linux" | "ios" | "android" | "web" | "desktop";
}>;
declare const messagingRelations: drizzle_orm.Relations<"messaging", {
    users: drizzle_orm.One<"user", false>;
}>;
declare enum MessagingType {
    NewEntry = "new-entry"
}
type MessagingData = {
    type: MessagingType.NewEntry;
    feedId: string;
    entryId: string;
    view: string;
    title: string;
    description: string;
};

declare const readabilities: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "readabilities";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "readabilities";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        entryId: drizzle_orm_pg_core.PgColumn<{
            name: "entry_id";
            tableName: "readabilities";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        content: drizzle_orm_pg_core.PgColumn<{
            name: "content";
            tableName: "readabilities";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;

declare const rsshub: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "rsshub";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "rsshub";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        baseUrl: drizzle_orm_pg_core.PgColumn<{
            name: "base_url";
            tableName: "rsshub";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        accessKey: drizzle_orm_pg_core.PgColumn<{
            name: "access_key";
            tableName: "rsshub";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        ownerUserId: drizzle_orm_pg_core.PgColumn<{
            name: "owner_user_id";
            tableName: "rsshub";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        price: drizzle_orm_pg_core.PgColumn<{
            name: "price";
            tableName: "rsshub";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        description: drizzle_orm_pg_core.PgColumn<{
            name: "description";
            tableName: "rsshub";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        userLimit: drizzle_orm_pg_core.PgColumn<{
            name: "user_limit";
            tableName: "rsshub";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        errorMessage: drizzle_orm_pg_core.PgColumn<{
            name: "error_message";
            tableName: "rsshub";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        errorAt: drizzle_orm_pg_core.PgColumn<{
            name: "error_at";
            tableName: "rsshub";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const rsshubOpenAPISchema: zod.ZodObject<{
    id: zod.ZodString;
    baseUrl: zod.ZodString;
    accessKey: zod.ZodNullable<zod.ZodString>;
    ownerUserId: zod.ZodString;
    price: zod.ZodNumber;
    description: zod.ZodNullable<zod.ZodString>;
    userLimit: zod.ZodNullable<zod.ZodNumber>;
    errorMessage: zod.ZodNullable<zod.ZodString>;
    errorAt: zod.ZodNullable<zod.ZodString>;
}, zod.UnknownKeysParam, zod.ZodTypeAny, {
    id: string;
    description: string | null;
    errorMessage: string | null;
    errorAt: string | null;
    ownerUserId: string;
    baseUrl: string;
    accessKey: string | null;
    price: number;
    userLimit: number | null;
}, {
    id: string;
    description: string | null;
    errorMessage: string | null;
    errorAt: string | null;
    ownerUserId: string;
    baseUrl: string;
    accessKey: string | null;
    price: number;
    userLimit: number | null;
}>;
declare const rsshubUsage: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "rsshub_usage";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "rsshub_usage";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        rsshubId: drizzle_orm_pg_core.PgColumn<{
            name: "rsshub_id";
            tableName: "rsshub_usage";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        userId: drizzle_orm_pg_core.PgColumn<{
            name: "user_id";
            tableName: "rsshub_usage";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const rsshubUsageOpenAPISchema: zod.ZodObject<{
    id: zod.ZodString;
    rsshubId: zod.ZodString;
    userId: zod.ZodString;
}, zod.UnknownKeysParam, zod.ZodTypeAny, {
    id: string;
    userId: string;
    rsshubId: string;
}, {
    id: string;
    userId: string;
    rsshubId: string;
}>;
declare const rsshubUsageRelations: drizzle_orm.Relations<"rsshub_usage", {
    rsshub: drizzle_orm.One<"rsshub", true>;
}>;

declare const rsshubAnalytics: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "rsshub_analytics";
    schema: undefined;
    columns: {
        rsshubId: drizzle_orm_pg_core.PgColumn<{
            name: "rsshub_id";
            tableName: "rsshub_analytics";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        rsshubRoute: drizzle_orm_pg_core.PgColumn<{
            name: "rsshub_route";
            tableName: "rsshub_analytics";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        rsshubNamespace: drizzle_orm_pg_core.PgColumn<{
            name: "rsshub_namespace";
            tableName: "rsshub_analytics";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        successCount: drizzle_orm_pg_core.PgColumn<{
            name: "success_count";
            tableName: "rsshub_analytics";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        errorCount: drizzle_orm_pg_core.PgColumn<{
            name: "error_count";
            tableName: "rsshub_analytics";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        timestamp: drizzle_orm_pg_core.PgColumn<{
            name: "timestamp";
            tableName: "rsshub_analytics";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const rsshubAnalyticsOpenAPISchema: zod.ZodObject<{
    rsshubId: zod.ZodString;
    rsshubRoute: zod.ZodString;
    rsshubNamespace: zod.ZodString;
    successCount: zod.ZodNumber;
    errorCount: zod.ZodNumber;
    timestamp: zod.ZodString;
}, zod.UnknownKeysParam, zod.ZodTypeAny, {
    rsshubRoute: string;
    rsshubNamespace: string;
    rsshubId: string;
    successCount: number;
    errorCount: number;
    timestamp: string;
}, {
    rsshubRoute: string;
    rsshubNamespace: string;
    rsshubId: string;
    successCount: number;
    errorCount: number;
    timestamp: string;
}>;

declare const settings: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "settings";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "settings";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        userId: drizzle_orm_pg_core.PgColumn<{
            name: "user_id";
            tableName: "settings";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        tab: drizzle_orm_pg_core.PgColumn<{
            name: "tab";
            tableName: "settings";
            dataType: "string";
            columnType: "PgText";
            data: "general" | "appearance" | "integration";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: ["general", "appearance", "integration"];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        payload: drizzle_orm_pg_core.PgColumn<{
            name: "payload";
            tableName: "settings";
            dataType: "json";
            columnType: "PgJsonb";
            data: Record<string, any>;
            driverParam: unknown;
            notNull: false;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            $type: Record<string, any>;
        }>;
        updateAt: drizzle_orm_pg_core.PgColumn<{
            name: "update_at";
            tableName: "settings";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        version: drizzle_orm_pg_core.PgColumn<{
            name: "version";
            tableName: "settings";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;

declare const timeline: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "timeline";
    schema: undefined;
    columns: {
        userId: drizzle_orm_pg_core.PgColumn<{
            name: "user_id";
            tableName: "timeline";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        feedId: drizzle_orm_pg_core.PgColumn<{
            name: "feedId";
            tableName: "timeline";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        entryId: drizzle_orm_pg_core.PgColumn<{
            name: "entry_id";
            tableName: "timeline";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        publishedAt: drizzle_orm_pg_core.PgColumn<{
            name: "published_at";
            tableName: "timeline";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        insertedAt: drizzle_orm_pg_core.PgColumn<{
            name: "inserted_at";
            tableName: "timeline";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        view: drizzle_orm_pg_core.PgColumn<{
            name: "view";
            tableName: "timeline";
            dataType: "number";
            columnType: "PgSmallInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        read: drizzle_orm_pg_core.PgColumn<{
            name: "read";
            tableName: "timeline";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        from: drizzle_orm_pg_core.PgColumn<{
            name: "from";
            tableName: "timeline";
            dataType: "array";
            columnType: "PgArray";
            data: string[];
            driverParam: string | string[];
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: drizzle_orm.Column<{
                name: "from";
                tableName: "timeline";
                dataType: "string";
                columnType: "PgText";
                data: string;
                driverParam: string;
                notNull: false;
                hasDefault: false;
                isPrimaryKey: false;
                isAutoincrement: false;
                hasRuntimeDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
                identity: undefined;
                generated: undefined;
            }, {}, {}>;
            identity: undefined;
            generated: undefined;
        }, {}, {
            baseBuilder: drizzle_orm_pg_core.PgColumnBuilder<{
                name: "from";
                dataType: "string";
                columnType: "PgText";
                data: string;
                enumValues: [string, ...string[]];
                driverParam: string;
            }, {}, {}, drizzle_orm.ColumnBuilderExtraConfig>;
            size: undefined;
        }>;
    };
    dialect: "pg";
}>;
declare const timelineOpenAPISchema: zod.ZodObject<{
    userId: zod.ZodString;
    feedId: zod.ZodString;
    entryId: zod.ZodString;
    publishedAt: zod.ZodString;
    insertedAt: zod.ZodString;
    view: zod.ZodNumber;
    read: zod.ZodNullable<zod.ZodBoolean>;
    from: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
}, zod.UnknownKeysParam, zod.ZodTypeAny, {
    userId: string;
    view: number;
    from: string[] | null;
    feedId: string;
    insertedAt: string;
    publishedAt: string;
    entryId: string;
    read: boolean | null;
}, {
    userId: string;
    view: number;
    from: string[] | null;
    feedId: string;
    insertedAt: string;
    publishedAt: string;
    entryId: string;
    read: boolean | null;
}>;
declare const timelineRelations: drizzle_orm.Relations<"timeline", {
    entries: drizzle_orm.One<"entries", true>;
    feeds: drizzle_orm.One<"feeds", true>;
    collections: drizzle_orm.One<"collections", true>;
    subscriptions: drizzle_orm.One<"subscriptions", true>;
}>;

declare const trendingFeeds: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "trendings_feeds";
    schema: undefined;
    columns: {
        feedId: drizzle_orm_pg_core.PgColumn<{
            name: "feed_id";
            tableName: "trendings_feeds";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        rankedAt: drizzle_orm_pg_core.PgColumn<{
            name: "ranked_at";
            tableName: "trendings_feeds";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        score1d: drizzle_orm_pg_core.PgColumn<{
            name: "score_1d";
            tableName: "trendings_feeds";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        score3d: drizzle_orm_pg_core.PgColumn<{
            name: "score_3d";
            tableName: "trendings_feeds";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        score7d: drizzle_orm_pg_core.PgColumn<{
            name: "score_7d";
            tableName: "trendings_feeds";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        score30d: drizzle_orm_pg_core.PgColumn<{
            name: "score_30d";
            tableName: "trendings_feeds";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        view: drizzle_orm_pg_core.PgColumn<{
            name: "view";
            tableName: "trendings_feeds";
            dataType: "number";
            columnType: "PgSmallInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        language: drizzle_orm_pg_core.PgColumn<{
            name: "language";
            tableName: "trendings_feeds";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        nsfw: drizzle_orm_pg_core.PgColumn<{
            name: "nsfw";
            tableName: "trendings_feeds";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const trendingFeedsRelations: drizzle_orm.Relations<"trendings_feeds", {
    feed: drizzle_orm.One<"feeds", true>;
}>;
declare const trendingFeedsOpenAPISchema: zod.ZodObject<{
    feedId: zod.ZodString;
    rankedAt: zod.ZodString;
    score1d: zod.ZodString;
    score3d: zod.ZodString;
    score7d: zod.ZodString;
    score30d: zod.ZodString;
    view: zod.ZodNumber;
    language: zod.ZodString;
    nsfw: zod.ZodNullable<zod.ZodBoolean>;
}, zod.UnknownKeysParam, zod.ZodTypeAny, {
    view: number;
    language: string;
    nsfw: boolean | null;
    feedId: string;
    rankedAt: string;
    score1d: string;
    score3d: string;
    score7d: string;
    score30d: string;
}, {
    view: number;
    language: string;
    nsfw: boolean | null;
    feedId: string;
    rankedAt: string;
    score1d: string;
    score3d: string;
    score7d: string;
    score30d: string;
}>;

declare enum UploadType {
    Avatar = "avatar"
}

declare const uploads: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "uploads";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "uploads";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        userId: drizzle_orm_pg_core.PgColumn<{
            name: "user_id";
            tableName: "uploads";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        url: drizzle_orm_pg_core.PgColumn<{
            name: "url";
            tableName: "uploads";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        md5: drizzle_orm_pg_core.PgColumn<{
            name: "md5";
            tableName: "uploads";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        mimeType: drizzle_orm_pg_core.PgColumn<{
            name: "mime_type";
            tableName: "uploads";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        size: drizzle_orm_pg_core.PgColumn<{
            name: "size";
            tableName: "uploads";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        type: drizzle_orm_pg_core.PgColumn<{
            name: "type";
            tableName: "uploads";
            dataType: "string";
            columnType: "PgText";
            data: UploadType;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [UploadType];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;

declare const user: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "user";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "user";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        name: drizzle_orm_pg_core.PgColumn<{
            name: "name";
            tableName: "user";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: 64;
        }>;
        email: drizzle_orm_pg_core.PgColumn<{
            name: "email";
            tableName: "user";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: 64;
        }>;
        emailVerified: drizzle_orm_pg_core.PgColumn<{
            name: "emailVerified";
            tableName: "user";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        image: drizzle_orm_pg_core.PgColumn<{
            name: "image";
            tableName: "user";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: 256;
        }>;
        handle: drizzle_orm_pg_core.PgColumn<{
            name: "handle";
            tableName: "user";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: 36;
        }>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "created_at";
            tableName: "user";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        updatedAt: drizzle_orm_pg_core.PgColumn<{
            name: "updatedAt";
            tableName: "user";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        twoFactorEnabled: drizzle_orm_pg_core.PgColumn<{
            name: "two_factor_enabled";
            tableName: "user";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        isAnonymous: drizzle_orm_pg_core.PgColumn<{
            name: "is_anonymous";
            tableName: "user";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        suspended: drizzle_orm_pg_core.PgColumn<{
            name: "suspended";
            tableName: "user";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        bio: drizzle_orm_pg_core.PgColumn<{
            name: "bio";
            tableName: "user";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: 256;
        }>;
        website: drizzle_orm_pg_core.PgColumn<{
            name: "website";
            tableName: "user";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: 256;
        }>;
        socialLinks: drizzle_orm_pg_core.PgColumn<{
            name: "social_links";
            tableName: "user";
            dataType: "json";
            columnType: "PgJsonb";
            data: {
                twitter: string;
                github: string;
                instagram: string;
                facebook: string;
                youtube: string;
            };
            driverParam: unknown;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            $type: {
                twitter: string;
                github: string;
                instagram: string;
                facebook: string;
                youtube: string;
            };
        }>;
    };
    dialect: "pg";
}>;
declare const users: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "user";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "user";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        name: drizzle_orm_pg_core.PgColumn<{
            name: "name";
            tableName: "user";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: 64;
        }>;
        email: drizzle_orm_pg_core.PgColumn<{
            name: "email";
            tableName: "user";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: 64;
        }>;
        emailVerified: drizzle_orm_pg_core.PgColumn<{
            name: "emailVerified";
            tableName: "user";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        image: drizzle_orm_pg_core.PgColumn<{
            name: "image";
            tableName: "user";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: 256;
        }>;
        handle: drizzle_orm_pg_core.PgColumn<{
            name: "handle";
            tableName: "user";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: 36;
        }>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "created_at";
            tableName: "user";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        updatedAt: drizzle_orm_pg_core.PgColumn<{
            name: "updatedAt";
            tableName: "user";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        twoFactorEnabled: drizzle_orm_pg_core.PgColumn<{
            name: "two_factor_enabled";
            tableName: "user";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        isAnonymous: drizzle_orm_pg_core.PgColumn<{
            name: "is_anonymous";
            tableName: "user";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        suspended: drizzle_orm_pg_core.PgColumn<{
            name: "suspended";
            tableName: "user";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        bio: drizzle_orm_pg_core.PgColumn<{
            name: "bio";
            tableName: "user";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: 256;
        }>;
        website: drizzle_orm_pg_core.PgColumn<{
            name: "website";
            tableName: "user";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: 256;
        }>;
        socialLinks: drizzle_orm_pg_core.PgColumn<{
            name: "social_links";
            tableName: "user";
            dataType: "json";
            columnType: "PgJsonb";
            data: {
                twitter: string;
                github: string;
                instagram: string;
                facebook: string;
                youtube: string;
            };
            driverParam: unknown;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            $type: {
                twitter: string;
                github: string;
                instagram: string;
                facebook: string;
                youtube: string;
            };
        }>;
    };
    dialect: "pg";
}>;
declare function lower(handle: AnyPgColumn): SQL;
declare const usersOpenApiSchema: zod.ZodObject<Omit<{
    id: zod.ZodString;
    name: zod.ZodNullable<zod.ZodString>;
    email: zod.ZodString;
    emailVerified: zod.ZodNullable<zod.ZodBoolean>;
    image: zod.ZodNullable<zod.ZodString>;
    handle: zod.ZodNullable<zod.ZodString>;
    createdAt: zod.ZodDate;
    updatedAt: zod.ZodDate;
    twoFactorEnabled: zod.ZodNullable<zod.ZodBoolean>;
    isAnonymous: zod.ZodNullable<zod.ZodBoolean>;
    suspended: zod.ZodNullable<zod.ZodBoolean>;
    bio: zod.ZodNullable<zod.ZodString>;
    website: zod.ZodNullable<zod.ZodString>;
    socialLinks: zod.ZodNullable<zod.ZodType<{
        twitter: string;
        github: string;
        instagram: string;
        facebook: string;
        youtube: string;
    }, zod.ZodTypeDef, {
        twitter: string;
        github: string;
        instagram: string;
        facebook: string;
        youtube: string;
    }>>;
}, "email">, "strip", zod.ZodTypeAny, {
    id: string;
    name: string | null;
    emailVerified: boolean | null;
    image: string | null;
    handle: string | null;
    createdAt: Date;
    updatedAt: Date;
    twoFactorEnabled: boolean | null;
    isAnonymous: boolean | null;
    suspended: boolean | null;
    bio: string | null;
    website: string | null;
    socialLinks: {
        twitter: string;
        github: string;
        instagram: string;
        facebook: string;
        youtube: string;
    } | null;
}, {
    id: string;
    name: string | null;
    emailVerified: boolean | null;
    image: string | null;
    handle: string | null;
    createdAt: Date;
    updatedAt: Date;
    twoFactorEnabled: boolean | null;
    isAnonymous: boolean | null;
    suspended: boolean | null;
    bio: string | null;
    website: string | null;
    socialLinks: {
        twitter: string;
        github: string;
        instagram: string;
        facebook: string;
        youtube: string;
    } | null;
}>;
declare const account: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "account";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "account";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        userId: drizzle_orm_pg_core.PgColumn<{
            name: "userId";
            tableName: "account";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        providerId: drizzle_orm_pg_core.PgColumn<{
            name: "provider";
            tableName: "account";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        accountId: drizzle_orm_pg_core.PgColumn<{
            name: "providerAccountId";
            tableName: "account";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        refreshToken: drizzle_orm_pg_core.PgColumn<{
            name: "refresh_token";
            tableName: "account";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        accessToken: drizzle_orm_pg_core.PgColumn<{
            name: "access_token";
            tableName: "account";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        accessTokenExpiresAt: drizzle_orm_pg_core.PgColumn<{
            name: "expires_at";
            tableName: "account";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        refreshTokenExpiresAt: drizzle_orm_pg_core.PgColumn<{
            name: "refreshTokenExpiresAt";
            tableName: "account";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        scope: drizzle_orm_pg_core.PgColumn<{
            name: "scope";
            tableName: "account";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        idToken: drizzle_orm_pg_core.PgColumn<{
            name: "id_token";
            tableName: "account";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        password: drizzle_orm_pg_core.PgColumn<{
            name: "password";
            tableName: "account";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "createdAt";
            tableName: "account";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        updatedAt: drizzle_orm_pg_core.PgColumn<{
            name: "updatedAt";
            tableName: "account";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const session: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "session";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "session";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        token: drizzle_orm_pg_core.PgColumn<{
            name: "sessionToken";
            tableName: "session";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        userId: drizzle_orm_pg_core.PgColumn<{
            name: "userId";
            tableName: "session";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        expiresAt: drizzle_orm_pg_core.PgColumn<{
            name: "expires";
            tableName: "session";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "createdAt";
            tableName: "session";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        updatedAt: drizzle_orm_pg_core.PgColumn<{
            name: "updatedAt";
            tableName: "session";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        ipAddress: drizzle_orm_pg_core.PgColumn<{
            name: "ipAddress";
            tableName: "session";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        userAgent: drizzle_orm_pg_core.PgColumn<{
            name: "userAgent";
            tableName: "session";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const verification: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "verificationToken";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "verificationToken";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        identifier: drizzle_orm_pg_core.PgColumn<{
            name: "identifier";
            tableName: "verificationToken";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        value: drizzle_orm_pg_core.PgColumn<{
            name: "token";
            tableName: "verificationToken";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        expiresAt: drizzle_orm_pg_core.PgColumn<{
            name: "expires";
            tableName: "verificationToken";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "createdAt";
            tableName: "verificationToken";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        updatedAt: drizzle_orm_pg_core.PgColumn<{
            name: "updatedAt";
            tableName: "verificationToken";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const twoFactor: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "two_factor";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "two_factor";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        secret: drizzle_orm_pg_core.PgColumn<{
            name: "secret";
            tableName: "two_factor";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        backupCodes: drizzle_orm_pg_core.PgColumn<{
            name: "backup_codes";
            tableName: "two_factor";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        userId: drizzle_orm_pg_core.PgColumn<{
            name: "user_id";
            tableName: "two_factor";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const usersRelations: drizzle_orm.Relations<"user", {
    subscriptions: drizzle_orm.Many<"subscriptions">;
    listsSubscriptions: drizzle_orm.Many<"lists_subscriptions">;
    collections: drizzle_orm.Many<"collections">;
    actions: drizzle_orm.One<"actions", true>;
    wallets: drizzle_orm.One<"wallets", true>;
    feeds: drizzle_orm.Many<"feeds">;
    inboxes: drizzle_orm.One<"inboxes", true>;
    messaging: drizzle_orm.Many<"messaging">;
}>;

declare const wallets: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "wallets";
    schema: undefined;
    columns: {
        addressIndex: drizzle_orm_pg_core.PgColumn<{
            name: "address_index";
            tableName: "wallets";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: "always";
            generated: undefined;
        }, {}, {}>;
        address: drizzle_orm_pg_core.PgColumn<{
            name: "address";
            tableName: "wallets";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        userId: drizzle_orm_pg_core.PgColumn<{
            name: "userId";
            tableName: "wallets";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "created_at";
            tableName: "wallets";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        powerToken: drizzle_orm_pg_core.PgColumn<{
            name: "power_token";
            tableName: "wallets";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        dailyPowerToken: drizzle_orm_pg_core.PgColumn<{
            name: "daily_power_token";
            tableName: "wallets";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        cashablePowerToken: drizzle_orm_pg_core.PgColumn<{
            name: "cashable_power_token";
            tableName: "wallets";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const walletsOpenAPISchema: zod.ZodObject<{
    addressIndex: zod.ZodNumber;
    address: zod.ZodNullable<zod.ZodString>;
    userId: zod.ZodString;
    createdAt: zod.ZodString;
    powerToken: zod.ZodString;
    dailyPowerToken: zod.ZodString;
    cashablePowerToken: zod.ZodString;
}, zod.UnknownKeysParam, zod.ZodTypeAny, {
    createdAt: string;
    userId: string;
    powerToken: string;
    addressIndex: number;
    address: string | null;
    dailyPowerToken: string;
    cashablePowerToken: string;
}, {
    createdAt: string;
    userId: string;
    powerToken: string;
    addressIndex: number;
    address: string | null;
    dailyPowerToken: string;
    cashablePowerToken: string;
}>;
declare const walletsRelations: drizzle_orm.Relations<"wallets", {
    user: drizzle_orm.One<"user", true>;
    transactionsFrom: drizzle_orm.Many<"transactions">;
    transactionTo: drizzle_orm.Many<"transactions">;
    level: drizzle_orm.One<"levels", false>;
}>;
declare const transactionType: drizzle_orm_pg_core.PgEnum<["tip", "mint", "burn", "withdraw", "purchase", "airdrop"]>;
declare const transactions: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "transactions";
    schema: undefined;
    columns: {
        hash: drizzle_orm_pg_core.PgColumn<{
            name: "hash";
            tableName: "transactions";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        type: drizzle_orm_pg_core.PgColumn<{
            name: "type";
            tableName: "transactions";
            dataType: "string";
            columnType: "PgEnumColumn";
            data: "tip" | "mint" | "burn" | "withdraw" | "purchase" | "airdrop";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: ["tip", "mint", "burn", "withdraw", "purchase", "airdrop"];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        fromUserId: drizzle_orm_pg_core.PgColumn<{
            name: "from_user_id";
            tableName: "transactions";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        toUserId: drizzle_orm_pg_core.PgColumn<{
            name: "to_user_id";
            tableName: "transactions";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        toFeedId: drizzle_orm_pg_core.PgColumn<{
            name: "to_feed_id";
            tableName: "transactions";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        toListId: drizzle_orm_pg_core.PgColumn<{
            name: "to_list_id";
            tableName: "transactions";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        toEntryId: drizzle_orm_pg_core.PgColumn<{
            name: "to_entry_id";
            tableName: "transactions";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        toRSSHubId: drizzle_orm_pg_core.PgColumn<{
            name: "to_rsshub_id";
            tableName: "transactions";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        powerToken: drizzle_orm_pg_core.PgColumn<{
            name: "power_token";
            tableName: "transactions";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        tax: drizzle_orm_pg_core.PgColumn<{
            name: "tax";
            tableName: "transactions";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "created_at";
            tableName: "transactions";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        comment: drizzle_orm_pg_core.PgColumn<{
            name: "comment";
            tableName: "transactions";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const transactionsOpenAPISchema: zod.ZodObject<{
    hash: zod.ZodString;
    type: zod.ZodEnum<["tip", "mint", "burn", "withdraw", "purchase", "airdrop"]>;
    fromUserId: zod.ZodNullable<zod.ZodString>;
    toUserId: zod.ZodNullable<zod.ZodString>;
    toFeedId: zod.ZodNullable<zod.ZodString>;
    toListId: zod.ZodNullable<zod.ZodString>;
    toEntryId: zod.ZodNullable<zod.ZodString>;
    toRSSHubId: zod.ZodNullable<zod.ZodString>;
    powerToken: zod.ZodString;
    tax: zod.ZodString;
    createdAt: zod.ZodString;
    comment: zod.ZodNullable<zod.ZodString>;
}, zod.UnknownKeysParam, zod.ZodTypeAny, {
    createdAt: string;
    type: "tip" | "mint" | "burn" | "withdraw" | "purchase" | "airdrop";
    hash: string;
    powerToken: string;
    fromUserId: string | null;
    toUserId: string | null;
    toFeedId: string | null;
    toListId: string | null;
    toEntryId: string | null;
    toRSSHubId: string | null;
    tax: string;
    comment: string | null;
}, {
    createdAt: string;
    type: "tip" | "mint" | "burn" | "withdraw" | "purchase" | "airdrop";
    hash: string;
    powerToken: string;
    fromUserId: string | null;
    toUserId: string | null;
    toFeedId: string | null;
    toListId: string | null;
    toEntryId: string | null;
    toRSSHubId: string | null;
    tax: string;
    comment: string | null;
}>;
declare const transactionsRelations: drizzle_orm.Relations<"transactions", {
    fromUser: drizzle_orm.One<"user", false>;
    toUser: drizzle_orm.One<"user", false>;
    toFeed: drizzle_orm.One<"feeds", false>;
    fromWallet: drizzle_orm.One<"wallets", false>;
    toWallet: drizzle_orm.One<"wallets", false>;
}>;
declare const feedPowerTokens: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "feedPowerTokens";
    schema: undefined;
    columns: {
        feedId: drizzle_orm_pg_core.PgColumn<{
            name: "feed_id";
            tableName: "feedPowerTokens";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        powerToken: drizzle_orm_pg_core.PgColumn<{
            name: "power_token";
            tableName: "feedPowerTokens";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const feedPowerTokensOpenAPISchema: zod.ZodObject<{
    feedId: zod.ZodString;
    powerToken: zod.ZodString;
}, zod.UnknownKeysParam, zod.ZodTypeAny, {
    feedId: string;
    powerToken: string;
}, {
    feedId: string;
    powerToken: string;
}>;
declare const feedPowerTokensRelations: drizzle_orm.Relations<"feedPowerTokens", {
    feed: drizzle_orm.One<"feeds", true>;
}>;
declare const levels: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "levels";
    schema: undefined;
    columns: {
        address: drizzle_orm_pg_core.PgColumn<{
            name: "address";
            tableName: "levels";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        rank: drizzle_orm_pg_core.PgColumn<{
            name: "rank";
            tableName: "levels";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        level: drizzle_orm_pg_core.PgColumn<{
            name: "level";
            tableName: "levels";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        prevActivityPoints: drizzle_orm_pg_core.PgColumn<{
            name: "prev_activity_points";
            tableName: "levels";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        activityPoints: drizzle_orm_pg_core.PgColumn<{
            name: "activity_points";
            tableName: "levels";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        powerToken: drizzle_orm_pg_core.PgColumn<{
            name: "power_token";
            tableName: "levels";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        userId: drizzle_orm_pg_core.PgColumn<{
            name: "userId";
            tableName: "levels";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const levelsOpenAPISchema: zod.ZodObject<{
    address: zod.ZodString;
    rank: zod.ZodNullable<zod.ZodNumber>;
    level: zod.ZodNullable<zod.ZodNumber>;
    prevActivityPoints: zod.ZodNullable<zod.ZodNumber>;
    activityPoints: zod.ZodNullable<zod.ZodNumber>;
    powerToken: zod.ZodString;
    userId: zod.ZodString;
}, zod.UnknownKeysParam, zod.ZodTypeAny, {
    userId: string;
    rank: number | null;
    powerToken: string;
    address: string;
    level: number | null;
    prevActivityPoints: number | null;
    activityPoints: number | null;
}, {
    userId: string;
    rank: number | null;
    powerToken: string;
    address: string;
    level: number | null;
    prevActivityPoints: number | null;
    activityPoints: number | null;
}>;
declare const levelsRelations: drizzle_orm.Relations<"levels", {
    wallet: drizzle_orm.One<"wallets", true>;
    user: drizzle_orm.One<"user", true>;
}>;
declare const boosts: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "boosts";
    schema: undefined;
    columns: {
        hash: drizzle_orm_pg_core.PgColumn<{
            name: "hash";
            tableName: "boosts";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        expiresAt: drizzle_orm_pg_core.PgColumn<{
            name: "expires_at";
            tableName: "boosts";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const rsshubPurchase: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "rsshub_purchase";
    schema: undefined;
    columns: {
        hash: drizzle_orm_pg_core.PgColumn<{
            name: "hash";
            tableName: "rsshub_purchase";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        expiresAt: drizzle_orm_pg_core.PgColumn<{
            name: "expires_at";
            tableName: "rsshub_purchase";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;

declare const auth: {
    handler: (request: Request) => Promise<Response>;
    api: better_auth.InferAPI<{
        ok: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    ok: boolean;
                };
            } : {
                ok: boolean;
            }>;
            options: {
                method: "GET";
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                ok: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/ok";
        };
        error: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: Response;
            } : Response>;
            options: {
                method: "GET";
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "text/html": {
                                        schema: {
                                            type: "string";
                                            description: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/error";
        };
        signInSocial: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "kick" | "zoom";
                    scopes?: string[] | undefined;
                    loginHint?: string | undefined;
                    idToken?: {
                        token: string;
                        refreshToken?: string | undefined;
                        accessToken?: string | undefined;
                        expiresAt?: number | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    requestSignUp?: boolean | undefined;
                    errorCallbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    redirect: boolean;
                    token: string;
                    url: undefined;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                } | {
                    url: string;
                    redirect: boolean;
                };
            } : {
                redirect: boolean;
                token: string;
                url: undefined;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } | {
                url: string;
                redirect: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    newUserCallbackURL: zod.ZodOptional<zod.ZodString>;
                    errorCallbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodEnum<["github", ...("apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "kick" | "zoom")[]]>;
                    disableRedirect: zod.ZodOptional<zod.ZodBoolean>;
                    idToken: zod.ZodOptional<zod.ZodObject<{
                        token: zod.ZodString;
                        nonce: zod.ZodOptional<zod.ZodString>;
                        accessToken: zod.ZodOptional<zod.ZodString>;
                        refreshToken: zod.ZodOptional<zod.ZodString>;
                        expiresAt: zod.ZodOptional<zod.ZodNumber>;
                    }, "strip", zod.ZodTypeAny, {
                        token: string;
                        refreshToken?: string | undefined;
                        accessToken?: string | undefined;
                        expiresAt?: number | undefined;
                        nonce?: string | undefined;
                    }, {
                        token: string;
                        refreshToken?: string | undefined;
                        accessToken?: string | undefined;
                        expiresAt?: number | undefined;
                        nonce?: string | undefined;
                    }>>;
                    scopes: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
                    requestSignUp: zod.ZodOptional<zod.ZodBoolean>;
                    loginHint: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "kick" | "zoom";
                    scopes?: string[] | undefined;
                    loginHint?: string | undefined;
                    idToken?: {
                        token: string;
                        refreshToken?: string | undefined;
                        accessToken?: string | undefined;
                        expiresAt?: number | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    requestSignUp?: boolean | undefined;
                    errorCallbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                }, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "kick" | "zoom";
                    scopes?: string[] | undefined;
                    loginHint?: string | undefined;
                    idToken?: {
                        token: string;
                        refreshToken?: string | undefined;
                        accessToken?: string | undefined;
                        expiresAt?: number | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    requestSignUp?: boolean | undefined;
                    errorCallbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        operationId: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            description: string;
                                            properties: {
                                                redirect: {
                                                    type: string;
                                                    enum: boolean[];
                                                };
                                                token: {
                                                    type: string;
                                                    description: string;
                                                    url: {
                                                        type: string;
                                                        nullable: boolean;
                                                    };
                                                    user: {
                                                        type: string;
                                                        properties: {
                                                            id: {
                                                                type: string;
                                                            };
                                                            email: {
                                                                type: string;
                                                            };
                                                            name: {
                                                                type: string;
                                                                nullable: boolean;
                                                            };
                                                            image: {
                                                                type: string;
                                                                nullable: boolean;
                                                            };
                                                            emailVerified: {
                                                                type: string;
                                                            };
                                                            createdAt: {
                                                                type: string;
                                                                format: string;
                                                            };
                                                            updatedAt: {
                                                                type: string;
                                                                format: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-in/social";
        };
        callbackOAuth: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    user?: string | undefined;
                    error_description?: string | undefined;
                } | undefined;
            } & {
                method: "GET" | "POST";
            } & {
                query?: {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    user?: string | undefined;
                    error_description?: string | undefined;
                } | undefined;
            } & {
                params: {
                    id: string;
                };
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: void;
            } : void>;
            options: {
                method: ("GET" | "POST")[];
                body: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    device_id: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                    user: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    user?: string | undefined;
                    error_description?: string | undefined;
                }, {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    user?: string | undefined;
                    error_description?: string | undefined;
                }>>;
                query: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    device_id: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                    user: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    user?: string | undefined;
                    error_description?: string | undefined;
                }, {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    user?: string | undefined;
                    error_description?: string | undefined;
                }>>;
                metadata: {
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/callback/:id";
        };
        getSession: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: string | boolean | undefined;
                } | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    session: {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        userId: string;
                        expiresAt: Date;
                        token: string;
                        ipAddress?: string | null | undefined | undefined;
                        userAgent?: string | null | undefined | undefined;
                    };
                    user: {
                        id: string;
                        name: string;
                        email: string;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                        image?: string | null | undefined | undefined;
                        handle: string;
                        bio: string;
                        website: string;
                        socialLinks: string;
                    } & {
                        id: string;
                        name: string;
                        email: string;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                        image?: string | null | undefined | undefined;
                        twoFactorEnabled: boolean | null | undefined;
                        handle: string;
                        bio: string;
                        website: string;
                        socialLinks: string;
                    };
                } | null;
            } : {
                session: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined | undefined;
                    userAgent?: string | null | undefined | undefined;
                };
                user: {
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined | undefined;
                    handle: string;
                    bio: string;
                    website: string;
                    socialLinks: string;
                } & {
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined | undefined;
                    twoFactorEnabled: boolean | null | undefined;
                    handle: string;
                    bio: string;
                    website: string;
                    socialLinks: string;
                };
            } | null>;
            options: {
                method: "GET";
                query: zod.ZodOptional<zod.ZodObject<{
                    disableCookieCache: zod.ZodOptional<zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>>;
                    disableRefresh: zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>;
                }, "strip", zod.ZodTypeAny, {
                    disableCookieCache?: boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }, {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: string | boolean | undefined;
                }>>;
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                session: {
                                                    $ref: string;
                                                };
                                                user: {
                                                    $ref: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/get-session";
        };
        signOut: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    success: boolean;
                };
            } : {
                success: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-out";
        };
        signUpEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: ({
                    name: string;
                    email: string;
                    password: string;
                    callbackURL?: string;
                } | ({
                    name: string;
                    email: string;
                    password: string;
                    callbackURL?: string;
                } & {} & {})) & {
                    handle: string;
                    bio: string;
                    website: string;
                    socialLinks: string;
                } & {
                    handle?: string | null | undefined;
                    bio?: string | null | undefined;
                    website?: string | null | undefined;
                    socialLinks?: string | null | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    token: null;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                } | {
                    token: string;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                token: null;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } | {
                token: string;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                metadata: {
                    $Infer: {
                        body: ({
                            name: string;
                            email: string;
                            password: string;
                            callbackURL?: string;
                        } | ({
                            name: string;
                            email: string;
                            password: string;
                            callbackURL?: string;
                        } & {} & {})) & {
                            handle: string;
                            bio: string;
                            website: string;
                            socialLinks: string;
                        } & {
                            handle?: string | null | undefined;
                            bio?: string | null | undefined;
                            website?: string | null | undefined;
                            socialLinks?: string | null | undefined;
                        };
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-up/email";
        };
        signInEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    redirect: boolean;
                    token: string;
                    url: string | undefined;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                redirect: boolean;
                token: string;
                url: string | undefined;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    password: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    rememberMe: zod.ZodOptional<zod.ZodDefault<zod.ZodBoolean>>;
                }, "strip", zod.ZodTypeAny, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                }, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            description: string;
                                            properties: {
                                                redirect: {
                                                    type: string;
                                                    enum: boolean[];
                                                };
                                                token: {
                                                    type: string;
                                                    description: string;
                                                };
                                                url: {
                                                    type: string;
                                                    nullable: boolean;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            nullable: boolean;
                                                        };
                                                        image: {
                                                            type: string;
                                                            nullable: boolean;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-in/email";
        };
        forgetPassword: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    email: string;
                    redirectTo?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    redirectTo: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    redirectTo?: string | undefined;
                }, {
                    email: string;
                    redirectTo?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/forget-password";
        };
        resetPassword: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    newPassword: string;
                    token?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: {
                    token?: string | undefined;
                } | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token?: string | undefined;
                }, {
                    token?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    token?: string | undefined;
                }, {
                    newPassword: string;
                    token?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/reset-password";
        };
        verifyEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query: {
                    token: string;
                    callbackURL?: string | undefined;
                };
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: void | {
                    status: boolean;
                    user: {
                        id: any;
                        email: any;
                        name: any;
                        image: any;
                        emailVerified: any;
                        createdAt: any;
                        updatedAt: any;
                    };
                } | {
                    status: boolean;
                    user: null;
                };
            } : void | {
                status: boolean;
                user: {
                    id: any;
                    email: any;
                    name: any;
                    image: any;
                    emailVerified: any;
                    createdAt: any;
                    updatedAt: any;
                };
            } | {
                status: boolean;
                user: null;
            }>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        parameters: ({
                            name: string;
                            in: "query";
                            description: string;
                            required: true;
                            schema: {
                                type: "string";
                            };
                        } | {
                            name: string;
                            in: "query";
                            description: string;
                            required: false;
                            schema: {
                                type: "string";
                            };
                        })[];
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/verify-email";
        };
        sendVerificationEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    email: string;
                    callbackURL?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    callbackURL?: string | undefined;
                }, {
                    email: string;
                    callbackURL?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            email: {
                                                type: string;
                                                description: string;
                                                example: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                                example: string;
                                                nullable: boolean;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                    example: boolean;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            "400": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                message: {
                                                    type: string;
                                                    description: string;
                                                    example: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/send-verification-email";
        };
        changeEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    newEmail: string;
                    callbackURL?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newEmail: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                                message: {
                                                    type: string;
                                                    enum: string[];
                                                    description: string;
                                                    nullable: boolean;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/change-email";
        };
        changePassword: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    token: string | null;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                token: string | null;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    currentPassword: zod.ZodString;
                    revokeOtherSessions: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/change-password";
        };
        setPassword: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    newPassword: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                }, {
                    newPassword: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
                };
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
            } & {
                use: any[];
            };
            path: "/set-password";
        };
        updateUser: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: Partial<better_auth.AdditionalUserFieldsInput<{
                    appName: string;
                    database: (options: BetterAuthOptions) => better_auth.Adapter;
                    advanced: {
                        database: {
                            generateId: false;
                        };
                        defaultCookieAttributes: {
                            sameSite: "none";
                            secure: true;
                        };
                    };
                    session: {
                        updateAge: number;
                        expiresIn: number;
                    };
                    basePath: string;
                    trustedOrigins: string[];
                    user: {
                        additionalFields: {
                            handle: {
                                type: "string";
                            };
                            socialLinks: {
                                type: "string";
                                transform: {
                                    input: (value: string | number | boolean | string[] | Date | number[] | null | undefined) => string;
                                    output: (value: string | number | boolean | string[] | Date | number[] | null | undefined) => any;
                                };
                            };
                            bio: {
                                type: "string";
                            };
                            website: {
                                type: "string";
                            };
                        };
                        changeEmail: {
                            enabled: true;
                            sendChangeEmailVerification: ({ user, url }: {
                                user: better_auth.User;
                                newEmail: string;
                                url: string;
                                token: string;
                            }) => Promise<void>;
                        };
                    };
                    account: {
                        accountLinking: {
                            enabled: true;
                            trustedProviders: ("github" | "apple" | "google")[];
                            allowDifferentEmails: true;
                        };
                    };
                    socialProviders: {
                        google: {
                            clientId: string;
                            clientSecret: string;
                        };
                        github: {
                            clientId: string;
                            clientSecret: string;
                        };
                        apple: {
                            enabled: boolean;
                            clientId: string;
                            clientSecret: string;
                            appBundleIdentifier: string | undefined;
                        };
                    };
                    emailAndPassword: {
                        enabled: true;
                        sendResetPassword({ user, url }: {
                            user: better_auth.User;
                            url: string;
                            token: string;
                        }): Promise<void>;
                    };
                    emailVerification: {
                        sendOnSignUp: true;
                        sendVerificationEmail({ user, url }: {
                            user: better_auth.User;
                            url: string;
                            token: string;
                        }): Promise<void>;
                    };
                    plugins: ({
                        id: "open-api";
                        endpoints: {
                            generateOpenAPISchema: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_1 extends boolean = false>(inputCtx_0?: ({
                                    body?: undefined;
                                } & {
                                    method?: "GET" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: better_call.Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_1 | undefined;
                                }) | undefined): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_1] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        openapi: string;
                                        info: {
                                            title: string;
                                            description: string;
                                            version: string;
                                        };
                                        components: {
                                            securitySchemes: {
                                                apiKeyCookie: {
                                                    type: string;
                                                    in: string;
                                                    name: string;
                                                    description: string;
                                                };
                                                bearerAuth: {
                                                    type: string;
                                                    scheme: string;
                                                    description: string;
                                                };
                                            };
                                            schemas: {};
                                        };
                                        security: {
                                            apiKeyCookie: never[];
                                            bearerAuth: never[];
                                        }[];
                                        servers: {
                                            url: string;
                                        }[];
                                        tags: {
                                            name: string;
                                            description: string;
                                        }[];
                                        paths: Record<string, better_auth_plugins.Path>;
                                    };
                                } : {
                                    openapi: string;
                                    info: {
                                        title: string;
                                        description: string;
                                        version: string;
                                    };
                                    components: {
                                        securitySchemes: {
                                            apiKeyCookie: {
                                                type: string;
                                                in: string;
                                                name: string;
                                                description: string;
                                            };
                                            bearerAuth: {
                                                type: string;
                                                scheme: string;
                                                description: string;
                                            };
                                        };
                                        schemas: {};
                                    };
                                    security: {
                                        apiKeyCookie: never[];
                                        bearerAuth: never[];
                                    }[];
                                    servers: {
                                        url: string;
                                    }[];
                                    tags: {
                                        name: string;
                                        description: string;
                                    }[];
                                    paths: Record<string, better_auth_plugins.Path>;
                                }>;
                                options: {
                                    method: "GET";
                                } & {
                                    use: any[];
                                };
                                path: "/open-api/generate-schema";
                            };
                            openAPIReference: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_2 extends boolean = false>(inputCtx_0?: ({
                                    body?: undefined;
                                } & {
                                    method?: "GET" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: better_call.Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_2 | undefined;
                                }) | undefined): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_2] extends [true] ? {
                                    headers: Headers;
                                    response: Response;
                                } : Response>;
                                options: {
                                    method: "GET";
                                    metadata: {
                                        isAction: boolean;
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/reference";
                            };
                        };
                    } | {
                        id: "two-factor";
                        endpoints: {
                            enableTwoFactor: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_3 extends boolean = false>(inputCtx_0: {
                                    body: {
                                        password: string;
                                        issuer?: string | undefined;
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: better_call.Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_3 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_3] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        totpURI: string;
                                        backupCodes: string[];
                                    };
                                } : {
                                    totpURI: string;
                                    backupCodes: string[];
                                }>;
                                options: {
                                    method: "POST";
                                    body: zod.ZodObject<{
                                        password: zod.ZodString;
                                        issuer: zod.ZodOptional<zod.ZodString>;
                                    }, "strip", zod.ZodTypeAny, {
                                        password: string;
                                        issuer?: string | undefined;
                                    }, {
                                        password: string;
                                        issuer?: string | undefined;
                                    }>;
                                    use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                                        session: {
                                            session: Record<string, any> & {
                                                id: string;
                                                createdAt: Date;
                                                updatedAt: Date;
                                                userId: string;
                                                expiresAt: Date;
                                                token: string;
                                                ipAddress?: string | null | undefined;
                                                userAgent?: string | null | undefined;
                                            };
                                            user: Record<string, any> & {
                                                id: string;
                                                name: string;
                                                email: string;
                                                emailVerified: boolean;
                                                createdAt: Date;
                                                updatedAt: Date;
                                                image?: string | null | undefined;
                                            };
                                        };
                                    }>)[];
                                    metadata: {
                                        openapi: {
                                            summary: string;
                                            description: string;
                                            responses: {
                                                200: {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    totpURI: {
                                                                        type: string;
                                                                        description: string;
                                                                    };
                                                                    backupCodes: {
                                                                        type: string;
                                                                        items: {
                                                                            type: string;
                                                                        };
                                                                        description: string;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/two-factor/enable";
                            };
                            disableTwoFactor: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_4 extends boolean = false>(inputCtx_0: {
                                    body: {
                                        password: string;
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: better_call.Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_4 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_4] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        status: boolean;
                                    };
                                } : {
                                    status: boolean;
                                }>;
                                options: {
                                    method: "POST";
                                    body: zod.ZodObject<{
                                        password: zod.ZodString;
                                    }, "strip", zod.ZodTypeAny, {
                                        password: string;
                                    }, {
                                        password: string;
                                    }>;
                                    use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                                        session: {
                                            session: Record<string, any> & {
                                                id: string;
                                                createdAt: Date;
                                                updatedAt: Date;
                                                userId: string;
                                                expiresAt: Date;
                                                token: string;
                                                ipAddress?: string | null | undefined;
                                                userAgent?: string | null | undefined;
                                            };
                                            user: Record<string, any> & {
                                                id: string;
                                                name: string;
                                                email: string;
                                                emailVerified: boolean;
                                                createdAt: Date;
                                                updatedAt: Date;
                                                image?: string | null | undefined;
                                            };
                                        };
                                    }>)[];
                                    metadata: {
                                        openapi: {
                                            summary: string;
                                            description: string;
                                            responses: {
                                                200: {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    status: {
                                                                        type: string;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/two-factor/disable";
                            };
                            verifyBackupCode: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_5 extends boolean = false>(inputCtx_0: {
                                    body: {
                                        code: string;
                                        trustDevice?: boolean | undefined;
                                        disableSession?: boolean | undefined;
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: better_call.Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_5 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_5] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        token: string | undefined;
                                        user: {
                                            id: string;
                                            email: string;
                                            emailVerified: boolean;
                                            name: string;
                                            image: string | null | undefined;
                                            createdAt: Date;
                                            updatedAt: Date;
                                        };
                                    };
                                } : {
                                    token: string | undefined;
                                    user: {
                                        id: string;
                                        email: string;
                                        emailVerified: boolean;
                                        name: string;
                                        image: string | null | undefined;
                                        createdAt: Date;
                                        updatedAt: Date;
                                    };
                                }>;
                                options: {
                                    method: "POST";
                                    body: zod.ZodObject<{
                                        code: zod.ZodString;
                                        disableSession: zod.ZodOptional<zod.ZodBoolean>;
                                        trustDevice: zod.ZodOptional<zod.ZodBoolean>;
                                    }, "strip", zod.ZodTypeAny, {
                                        code: string;
                                        trustDevice?: boolean | undefined;
                                        disableSession?: boolean | undefined;
                                    }, {
                                        code: string;
                                        trustDevice?: boolean | undefined;
                                        disableSession?: boolean | undefined;
                                    }>;
                                    metadata: {
                                        openapi: {
                                            description: string;
                                            responses: {
                                                "200": {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    user: {
                                                                        type: string;
                                                                        properties: {
                                                                            id: {
                                                                                type: string;
                                                                                description: string;
                                                                            };
                                                                            email: {
                                                                                type: string;
                                                                                format: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            emailVerified: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            name: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            image: {
                                                                                type: string;
                                                                                format: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            twoFactorEnabled: {
                                                                                type: string;
                                                                                description: string;
                                                                            };
                                                                            createdAt: {
                                                                                type: string;
                                                                                format: string;
                                                                                description: string;
                                                                            };
                                                                            updatedAt: {
                                                                                type: string;
                                                                                format: string;
                                                                                description: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                        description: string;
                                                                    };
                                                                    session: {
                                                                        type: string;
                                                                        properties: {
                                                                            token: {
                                                                                type: string;
                                                                                description: string;
                                                                            };
                                                                            userId: {
                                                                                type: string;
                                                                                description: string;
                                                                            };
                                                                            createdAt: {
                                                                                type: string;
                                                                                format: string;
                                                                                description: string;
                                                                            };
                                                                            expiresAt: {
                                                                                type: string;
                                                                                format: string;
                                                                                description: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                        description: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/two-factor/verify-backup-code";
                            };
                            generateBackupCodes: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_6 extends boolean = false>(inputCtx_0: {
                                    body: {
                                        password: string;
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: better_call.Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_6 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_6] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        status: boolean;
                                        backupCodes: string[];
                                    };
                                } : {
                                    status: boolean;
                                    backupCodes: string[];
                                }>;
                                options: {
                                    method: "POST";
                                    body: zod.ZodObject<{
                                        password: zod.ZodString;
                                    }, "strip", zod.ZodTypeAny, {
                                        password: string;
                                    }, {
                                        password: string;
                                    }>;
                                    use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                                        session: {
                                            session: Record<string, any> & {
                                                id: string;
                                                createdAt: Date;
                                                updatedAt: Date;
                                                userId: string;
                                                expiresAt: Date;
                                                token: string;
                                                ipAddress?: string | null | undefined;
                                                userAgent?: string | null | undefined;
                                            };
                                            user: Record<string, any> & {
                                                id: string;
                                                name: string;
                                                email: string;
                                                emailVerified: boolean;
                                                createdAt: Date;
                                                updatedAt: Date;
                                                image?: string | null | undefined;
                                            };
                                        };
                                    }>)[];
                                    metadata: {
                                        openapi: {
                                            description: string;
                                            responses: {
                                                "200": {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    status: {
                                                                        type: string;
                                                                        description: string;
                                                                        enum: boolean[];
                                                                    };
                                                                    backupCodes: {
                                                                        type: string;
                                                                        items: {
                                                                            type: string;
                                                                        };
                                                                        description: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/two-factor/generate-backup-codes";
                            };
                            viewBackupCodes: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_7 extends boolean = false>(inputCtx_0: {
                                    body: {
                                        userId: string;
                                    };
                                } & {
                                    method?: "GET" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: better_call.Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_7 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_7] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        status: boolean;
                                        backupCodes: string[];
                                    };
                                } : {
                                    status: boolean;
                                    backupCodes: string[];
                                }>;
                                options: {
                                    method: "GET";
                                    body: zod.ZodObject<{
                                        userId: zod.ZodString;
                                    }, "strip", zod.ZodTypeAny, {
                                        userId: string;
                                    }, {
                                        userId: string;
                                    }>;
                                    metadata: {
                                        SERVER_ONLY: true;
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/two-factor/view-backup-codes";
                            };
                            sendTwoFactorOTP: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_8 extends boolean = false>(inputCtx_0?: ({
                                    body?: {
                                        trustDevice?: boolean | undefined;
                                    } | undefined;
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: better_call.Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_8 | undefined;
                                }) | undefined): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_8] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        status: boolean;
                                    };
                                } : {
                                    status: boolean;
                                }>;
                                options: {
                                    method: "POST";
                                    body: zod.ZodOptional<zod.ZodObject<{
                                        trustDevice: zod.ZodOptional<zod.ZodBoolean>;
                                    }, "strip", zod.ZodTypeAny, {
                                        trustDevice?: boolean | undefined;
                                    }, {
                                        trustDevice?: boolean | undefined;
                                    }>>;
                                    metadata: {
                                        openapi: {
                                            summary: string;
                                            description: string;
                                            responses: {
                                                200: {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    status: {
                                                                        type: string;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/two-factor/send-otp";
                            };
                            verifyTwoFactorOTP: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_9 extends boolean = false>(inputCtx_0: {
                                    body: {
                                        code: string;
                                        trustDevice?: boolean | undefined;
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: better_call.Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_9 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_9] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        token: string;
                                        user: {
                                            id: any;
                                            email: any;
                                            emailVerified: any;
                                            name: any;
                                            image: any;
                                            createdAt: any;
                                            updatedAt: any;
                                        };
                                    };
                                } : {
                                    token: string;
                                    user: {
                                        id: any;
                                        email: any;
                                        emailVerified: any;
                                        name: any;
                                        image: any;
                                        createdAt: any;
                                        updatedAt: any;
                                    };
                                }>;
                                options: {
                                    method: "POST";
                                    body: zod.ZodObject<{
                                        code: zod.ZodString;
                                        trustDevice: zod.ZodOptional<zod.ZodBoolean>;
                                    }, "strip", zod.ZodTypeAny, {
                                        code: string;
                                        trustDevice?: boolean | undefined;
                                    }, {
                                        code: string;
                                        trustDevice?: boolean | undefined;
                                    }>;
                                    metadata: {
                                        openapi: {
                                            summary: string;
                                            description: string;
                                            responses: {
                                                "200": {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    token: {
                                                                        type: string;
                                                                        description: string;
                                                                    };
                                                                    user: {
                                                                        type: string;
                                                                        properties: {
                                                                            id: {
                                                                                type: string;
                                                                                description: string;
                                                                            };
                                                                            email: {
                                                                                type: string;
                                                                                format: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            emailVerified: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            name: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            image: {
                                                                                type: string;
                                                                                format: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            createdAt: {
                                                                                type: string;
                                                                                format: string;
                                                                                description: string;
                                                                            };
                                                                            updatedAt: {
                                                                                type: string;
                                                                                format: string;
                                                                                description: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                        description: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/two-factor/verify-otp";
                            };
                            generateTOTP: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_10 extends boolean = false>(inputCtx_0: {
                                    body: {
                                        secret: string;
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: better_call.Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_10 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_10] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        code: string;
                                    };
                                } : {
                                    code: string;
                                }>;
                                options: {
                                    method: "POST";
                                    body: zod.ZodObject<{
                                        secret: zod.ZodString;
                                    }, "strip", zod.ZodTypeAny, {
                                        secret: string;
                                    }, {
                                        secret: string;
                                    }>;
                                    metadata: {
                                        openapi: {
                                            summary: string;
                                            description: string;
                                            responses: {
                                                200: {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    code: {
                                                                        type: string;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                        SERVER_ONLY: true;
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/totp/generate";
                            };
                            getTOTPURI: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_11 extends boolean = false>(inputCtx_0: {
                                    body: {
                                        password: string;
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: better_call.Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_11 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_11] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        totpURI: string;
                                    };
                                } : {
                                    totpURI: string;
                                }>;
                                options: {
                                    method: "POST";
                                    use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                                        session: {
                                            session: Record<string, any> & {
                                                id: string;
                                                createdAt: Date;
                                                updatedAt: Date;
                                                userId: string;
                                                expiresAt: Date;
                                                token: string;
                                                ipAddress?: string | null | undefined;
                                                userAgent?: string | null | undefined;
                                            };
                                            user: Record<string, any> & {
                                                id: string;
                                                name: string;
                                                email: string;
                                                emailVerified: boolean;
                                                createdAt: Date;
                                                updatedAt: Date;
                                                image?: string | null | undefined;
                                            };
                                        };
                                    }>)[];
                                    body: zod.ZodObject<{
                                        password: zod.ZodString;
                                    }, "strip", zod.ZodTypeAny, {
                                        password: string;
                                    }, {
                                        password: string;
                                    }>;
                                    metadata: {
                                        openapi: {
                                            summary: string;
                                            description: string;
                                            responses: {
                                                200: {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    totpURI: {
                                                                        type: string;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/two-factor/get-totp-uri";
                            };
                            verifyTOTP: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_12 extends boolean = false>(inputCtx_0: {
                                    body: {
                                        code: string;
                                        trustDevice?: boolean | undefined;
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: better_call.Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_12 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_12] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        token: string;
                                        user: {
                                            id: string;
                                            email: string;
                                            emailVerified: boolean;
                                            name: string;
                                            image: string | null | undefined;
                                            createdAt: Date;
                                            updatedAt: Date;
                                        };
                                    };
                                } : {
                                    token: string;
                                    user: {
                                        id: string;
                                        email: string;
                                        emailVerified: boolean;
                                        name: string;
                                        image: string | null | undefined;
                                        createdAt: Date;
                                        updatedAt: Date;
                                    };
                                }>;
                                options: {
                                    method: "POST";
                                    body: zod.ZodObject<{
                                        code: zod.ZodString;
                                        trustDevice: zod.ZodOptional<zod.ZodBoolean>;
                                    }, "strip", zod.ZodTypeAny, {
                                        code: string;
                                        trustDevice?: boolean | undefined;
                                    }, {
                                        code: string;
                                        trustDevice?: boolean | undefined;
                                    }>;
                                    metadata: {
                                        openapi: {
                                            summary: string;
                                            description: string;
                                            responses: {
                                                200: {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    status: {
                                                                        type: string;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/two-factor/verify-totp";
                            };
                        };
                        options: better_auth_plugins.TwoFactorOptions | undefined;
                        hooks: {
                            after: {
                                matcher(context: better_auth.HookEndpointContext): boolean;
                                handler: (inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                                    twoFactorRedirect: boolean;
                                } | undefined>;
                            }[];
                        };
                        schema: {
                            user: {
                                fields: {
                                    twoFactorEnabled: {
                                        type: "boolean";
                                        required: false;
                                        defaultValue: false;
                                        input: false;
                                    };
                                };
                            };
                            twoFactor: {
                                fields: {
                                    secret: {
                                        type: "string";
                                        required: true;
                                        returned: false;
                                    };
                                    backupCodes: {
                                        type: "string";
                                        required: true;
                                        returned: false;
                                    };
                                    userId: {
                                        type: "string";
                                        required: true;
                                        returned: false;
                                        references: {
                                            model: string;
                                            field: string;
                                        };
                                    };
                                };
                            };
                        };
                        rateLimit: {
                            pathMatcher(path: string): boolean;
                            window: number;
                            max: number;
                        }[];
                        $ERROR_CODES: {
                            readonly OTP_NOT_ENABLED: "OTP not enabled";
                            readonly OTP_HAS_EXPIRED: "OTP has expired";
                            readonly TOTP_NOT_ENABLED: "TOTP not enabled";
                            readonly TWO_FACTOR_NOT_ENABLED: "Two factor isn't enabled";
                            readonly BACKUP_CODES_NOT_ENABLED: "Backup codes aren't enabled";
                            readonly INVALID_BACKUP_CODE: "Invalid backup code";
                            readonly INVALID_CODE: "Invalid code";
                            readonly TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE: "Too many attempts. Please request a new code.";
                            readonly INVALID_TWO_FACTOR_COOKIE: "Invalid two factor cookie";
                        };
                    } | {
                        id: "expo";
                        init: (ctx: better_auth.AuthContext) => {
                            options: {
                                trustedOrigins: string[];
                            };
                        };
                        onRequest(request: Request, ctx: better_auth.AuthContext): Promise<{
                            request: Request;
                        } | undefined>;
                        hooks: {
                            after: {
                                matcher(context: better_auth.HookEndpointContext): boolean;
                                handler: (inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>;
                            }[];
                        };
                    } | {
                        id: "custom-session";
                        endpoints: {
                            getSession: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_13 extends boolean = false>(inputCtx_0: {
                                    body?: undefined;
                                } & {
                                    method?: "GET" | undefined;
                                } & {
                                    query?: {
                                        disableCookieCache?: string | boolean | undefined;
                                        disableRefresh?: boolean | undefined;
                                    } | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: better_call.Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_13 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_13] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        user: {
                                            id: string;
                                            name: string;
                                            email: string;
                                            emailVerified: boolean;
                                            createdAt: Date;
                                            updatedAt: Date;
                                            image?: string | null | undefined | undefined;
                                        } & {
                                            image: string | null;
                                            handle: string | null;
                                            twoFactorEnabled: boolean | null;
                                            socialLinks: Record<string, string> | null;
                                            bio: string | null;
                                            website: string | null;
                                        };
                                        session: {
                                            id: string;
                                            createdAt: Date;
                                            updatedAt: Date;
                                            userId: string;
                                            expiresAt: Date;
                                            token: string;
                                            ipAddress?: string | null | undefined | undefined;
                                            userAgent?: string | null | undefined | undefined;
                                        };
                                        invitation: boolean | {
                                            code: string;
                                            createdAt: Date | null;
                                            usedAt: Date | null;
                                            fromUserId: string;
                                            toUserId: string | null;
                                        } | undefined;
                                        role: "user" | "trial";
                                    } | null;
                                } : {
                                    user: {
                                        id: string;
                                        name: string;
                                        email: string;
                                        emailVerified: boolean;
                                        createdAt: Date;
                                        updatedAt: Date;
                                        image?: string | null | undefined | undefined;
                                    } & {
                                        image: string | null;
                                        handle: string | null;
                                        twoFactorEnabled: boolean | null;
                                        socialLinks: Record<string, string> | null;
                                        bio: string | null;
                                        website: string | null;
                                    };
                                    session: {
                                        id: string;
                                        createdAt: Date;
                                        updatedAt: Date;
                                        userId: string;
                                        expiresAt: Date;
                                        token: string;
                                        ipAddress?: string | null | undefined | undefined;
                                        userAgent?: string | null | undefined | undefined;
                                    };
                                    invitation: boolean | {
                                        code: string;
                                        createdAt: Date | null;
                                        usedAt: Date | null;
                                        fromUserId: string;
                                        toUserId: string | null;
                                    } | undefined;
                                    role: "user" | "trial";
                                } | null>;
                                options: {
                                    method: "GET";
                                    query: zod.ZodOptional<zod.ZodObject<{
                                        disableCookieCache: zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>;
                                        disableRefresh: zod.ZodOptional<zod.ZodBoolean>;
                                    }, "strip", zod.ZodTypeAny, {
                                        disableCookieCache?: boolean | undefined;
                                        disableRefresh?: boolean | undefined;
                                    }, {
                                        disableCookieCache?: string | boolean | undefined;
                                        disableRefresh?: boolean | undefined;
                                    }>>;
                                    metadata: {
                                        CUSTOM_SESSION: boolean;
                                        openapi: {
                                            description: string;
                                            responses: {
                                                "200": {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "array";
                                                                nullable: boolean;
                                                                items: {
                                                                    $ref: string;
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    requireHeaders: true;
                                } & {
                                    use: any[];
                                };
                                path: "/get-session";
                            };
                        };
                    } | {
                        id: "customGetProviders";
                        endpoints: {
                            customGetProviders: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_14 extends boolean = false>(inputCtx_0?: ({
                                    body?: undefined;
                                } & {
                                    method?: "GET" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: better_call.Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_14 | undefined;
                                }) | undefined): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_14] extends [true] ? {
                                    headers: Headers;
                                    response: any;
                                } : any>;
                                options: {
                                    method: "GET";
                                } & {
                                    use: any[];
                                };
                                path: "/get-providers";
                            };
                        };
                    } | {
                        id: "getAccountInfo";
                        endpoints: {
                            getAccountInfo: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_14 extends boolean = false>(inputCtx_0?: ({
                                    body?: undefined;
                                } & {
                                    method?: "GET" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: better_call.Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_14 | undefined;
                                }) | undefined): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_14] extends [true] ? {
                                    headers: Headers;
                                    response: ({
                                        id: string;
                                        provider: string;
                                        profile: {
                                            id: string;
                                            name?: string;
                                            email?: string | null;
                                            image?: string;
                                            emailVerified: boolean;
                                        };
                                        accountId?: undefined;
                                    } | {
                                        id: string;
                                        accountId: string;
                                        provider: string;
                                        profile: {
                                            id: string;
                                            name?: string;
                                            email?: string | null;
                                            image?: string;
                                            emailVerified: boolean;
                                        } | undefined;
                                    })[] | null;
                                } : ({
                                    id: string;
                                    provider: string;
                                    profile: {
                                        id: string;
                                        name?: string;
                                        email?: string | null;
                                        image?: string;
                                        emailVerified: boolean;
                                    };
                                    accountId?: undefined;
                                } | {
                                    id: string;
                                    accountId: string;
                                    provider: string;
                                    profile: {
                                        id: string;
                                        name?: string;
                                        email?: string | null;
                                        image?: string;
                                        emailVerified: boolean;
                                    } | undefined;
                                })[] | null>;
                                options: {
                                    method: "GET";
                                } & {
                                    use: any[];
                                };
                                path: "/get-account-info";
                            };
                        };
                    } | {
                        id: "oneTimeToken";
                        endpoints: {
                            generateOneTimeToken: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_14 extends boolean = false>(inputCtx_0?: ({
                                    body?: undefined;
                                } & {
                                    method?: "GET" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: better_call.Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_14 | undefined;
                                }) | undefined): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_14] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        token: string;
                                    };
                                } : {
                                    token: string;
                                }>;
                                options: {
                                    method: "GET";
                                    use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                                        session: {
                                            session: Record<string, any> & {
                                                id: string;
                                                createdAt: Date;
                                                updatedAt: Date;
                                                userId: string;
                                                expiresAt: Date;
                                                token: string;
                                                ipAddress?: string | null | undefined;
                                                userAgent?: string | null | undefined;
                                            };
                                            user: Record<string, any> & {
                                                id: string;
                                                name: string;
                                                email: string;
                                                emailVerified: boolean;
                                                createdAt: Date;
                                                updatedAt: Date;
                                                image?: string | null | undefined;
                                            };
                                        };
                                    }>)[];
                                } & {
                                    use: any[];
                                };
                                path: "/one-time-token/generate";
                            };
                            applyOneTimeToken: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_14 extends boolean = false>(inputCtx_0: {
                                    body: {
                                        token: string;
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: better_call.Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_14 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_14] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        user: {
                                            id: string;
                                            name: string;
                                            email: string;
                                            emailVerified: boolean;
                                            createdAt: Date;
                                            updatedAt: Date;
                                            image?: string | null | undefined;
                                        } & Record<string, any>;
                                    };
                                } : {
                                    user: {
                                        id: string;
                                        name: string;
                                        email: string;
                                        emailVerified: boolean;
                                        createdAt: Date;
                                        updatedAt: Date;
                                        image?: string | null | undefined;
                                    } & Record<string, any>;
                                }>;
                                options: {
                                    method: "POST";
                                    body: zod.ZodObject<{
                                        token: zod.ZodString;
                                    }, "strip", zod.ZodTypeAny, {
                                        token: string;
                                    }, {
                                        token: string;
                                    }>;
                                } & {
                                    use: any[];
                                };
                                path: "/one-time-token/apply";
                            };
                        };
                    })[];
                }>> & {
                    name?: string;
                    image?: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    $Infer: {
                        body: Partial<better_auth.AdditionalUserFieldsInput<{
                            appName: string;
                            database: (options: BetterAuthOptions) => better_auth.Adapter;
                            advanced: {
                                database: {
                                    generateId: false;
                                };
                                defaultCookieAttributes: {
                                    sameSite: "none";
                                    secure: true;
                                };
                            };
                            session: {
                                updateAge: number;
                                expiresIn: number;
                            };
                            basePath: string;
                            trustedOrigins: string[];
                            user: {
                                additionalFields: {
                                    handle: {
                                        type: "string";
                                    };
                                    socialLinks: {
                                        type: "string";
                                        transform: {
                                            input: (value: string | number | boolean | string[] | Date | number[] | null | undefined) => string;
                                            output: (value: string | number | boolean | string[] | Date | number[] | null | undefined) => any;
                                        };
                                    };
                                    bio: {
                                        type: "string";
                                    };
                                    website: {
                                        type: "string";
                                    };
                                };
                                changeEmail: {
                                    enabled: true;
                                    sendChangeEmailVerification: ({ user, url }: {
                                        user: better_auth.User;
                                        newEmail: string;
                                        url: string;
                                        token: string;
                                    }) => Promise<void>;
                                };
                            };
                            account: {
                                accountLinking: {
                                    enabled: true;
                                    trustedProviders: ("github" | "apple" | "google")[];
                                    allowDifferentEmails: true;
                                };
                            };
                            socialProviders: {
                                google: {
                                    clientId: string;
                                    clientSecret: string;
                                };
                                github: {
                                    clientId: string;
                                    clientSecret: string;
                                };
                                apple: {
                                    enabled: boolean;
                                    clientId: string;
                                    clientSecret: string;
                                    appBundleIdentifier: string | undefined;
                                };
                            };
                            emailAndPassword: {
                                enabled: true;
                                sendResetPassword({ user, url }: {
                                    user: better_auth.User;
                                    url: string;
                                    token: string;
                                }): Promise<void>;
                            };
                            emailVerification: {
                                sendOnSignUp: true;
                                sendVerificationEmail({ user, url }: {
                                    user: better_auth.User;
                                    url: string;
                                    token: string;
                                }): Promise<void>;
                            };
                            plugins: ({
                                id: "open-api";
                                endpoints: {
                                    generateOpenAPISchema: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                                            body?: undefined;
                                        } & {
                                            method?: "GET" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: better_call.Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                openapi: string;
                                                info: {
                                                    title: string;
                                                    description: string;
                                                    version: string;
                                                };
                                                components: {
                                                    securitySchemes: {
                                                        apiKeyCookie: {
                                                            type: string;
                                                            in: string;
                                                            name: string;
                                                            description: string;
                                                        };
                                                        bearerAuth: {
                                                            type: string;
                                                            scheme: string;
                                                            description: string;
                                                        };
                                                    };
                                                    schemas: {};
                                                };
                                                security: {
                                                    apiKeyCookie: never[];
                                                    bearerAuth: never[];
                                                }[];
                                                servers: {
                                                    url: string;
                                                }[];
                                                tags: {
                                                    name: string;
                                                    description: string;
                                                }[];
                                                paths: Record<string, better_auth_plugins.Path>;
                                            };
                                        } : {
                                            openapi: string;
                                            info: {
                                                title: string;
                                                description: string;
                                                version: string;
                                            };
                                            components: {
                                                securitySchemes: {
                                                    apiKeyCookie: {
                                                        type: string;
                                                        in: string;
                                                        name: string;
                                                        description: string;
                                                    };
                                                    bearerAuth: {
                                                        type: string;
                                                        scheme: string;
                                                        description: string;
                                                    };
                                                };
                                                schemas: {};
                                            };
                                            security: {
                                                apiKeyCookie: never[];
                                                bearerAuth: never[];
                                            }[];
                                            servers: {
                                                url: string;
                                            }[];
                                            tags: {
                                                name: string;
                                                description: string;
                                            }[];
                                            paths: Record<string, better_auth_plugins.Path>;
                                        }>;
                                        options: {
                                            method: "GET";
                                        } & {
                                            use: any[];
                                        };
                                        path: "/open-api/generate-schema";
                                    };
                                    openAPIReference: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                                            body?: undefined;
                                        } & {
                                            method?: "GET" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: better_call.Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: Response;
                                        } : Response>;
                                        options: {
                                            method: "GET";
                                            metadata: {
                                                isAction: boolean;
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/reference";
                                    };
                                };
                            } | {
                                id: "two-factor";
                                endpoints: {
                                    enableTwoFactor: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
                                                password: string;
                                                issuer?: string | undefined;
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: better_call.Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                totpURI: string;
                                                backupCodes: string[];
                                            };
                                        } : {
                                            totpURI: string;
                                            backupCodes: string[];
                                        }>;
                                        options: {
                                            method: "POST";
                                            body: zod.ZodObject<{
                                                password: zod.ZodString;
                                                issuer: zod.ZodOptional<zod.ZodString>;
                                            }, "strip", zod.ZodTypeAny, {
                                                password: string;
                                                issuer?: string | undefined;
                                            }, {
                                                password: string;
                                                issuer?: string | undefined;
                                            }>;
                                            use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                                                session: {
                                                    session: Record<string, any> & {
                                                        id: string;
                                                        createdAt: Date;
                                                        updatedAt: Date;
                                                        userId: string;
                                                        expiresAt: Date;
                                                        token: string;
                                                        ipAddress?: string | null | undefined;
                                                        userAgent?: string | null | undefined;
                                                    };
                                                    user: Record<string, any> & {
                                                        id: string;
                                                        name: string;
                                                        email: string;
                                                        emailVerified: boolean;
                                                        createdAt: Date;
                                                        updatedAt: Date;
                                                        image?: string | null | undefined;
                                                    };
                                                };
                                            }>)[];
                                            metadata: {
                                                openapi: {
                                                    summary: string;
                                                    description: string;
                                                    responses: {
                                                        200: {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            totpURI: {
                                                                                type: string;
                                                                                description: string;
                                                                            };
                                                                            backupCodes: {
                                                                                type: string;
                                                                                items: {
                                                                                    type: string;
                                                                                };
                                                                                description: string;
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/two-factor/enable";
                                    };
                                    disableTwoFactor: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
                                                password: string;
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: better_call.Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                status: boolean;
                                            };
                                        } : {
                                            status: boolean;
                                        }>;
                                        options: {
                                            method: "POST";
                                            body: zod.ZodObject<{
                                                password: zod.ZodString;
                                            }, "strip", zod.ZodTypeAny, {
                                                password: string;
                                            }, {
                                                password: string;
                                            }>;
                                            use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                                                session: {
                                                    session: Record<string, any> & {
                                                        id: string;
                                                        createdAt: Date;
                                                        updatedAt: Date;
                                                        userId: string;
                                                        expiresAt: Date;
                                                        token: string;
                                                        ipAddress?: string | null | undefined;
                                                        userAgent?: string | null | undefined;
                                                    };
                                                    user: Record<string, any> & {
                                                        id: string;
                                                        name: string;
                                                        email: string;
                                                        emailVerified: boolean;
                                                        createdAt: Date;
                                                        updatedAt: Date;
                                                        image?: string | null | undefined;
                                                    };
                                                };
                                            }>)[];
                                            metadata: {
                                                openapi: {
                                                    summary: string;
                                                    description: string;
                                                    responses: {
                                                        200: {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            status: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/two-factor/disable";
                                    };
                                    verifyBackupCode: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
                                                code: string;
                                                trustDevice?: boolean | undefined;
                                                disableSession?: boolean | undefined;
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: better_call.Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                token: string | undefined;
                                                user: {
                                                    id: string;
                                                    email: string;
                                                    emailVerified: boolean;
                                                    name: string;
                                                    image: string | null | undefined;
                                                    createdAt: Date;
                                                    updatedAt: Date;
                                                };
                                            };
                                        } : {
                                            token: string | undefined;
                                            user: {
                                                id: string;
                                                email: string;
                                                emailVerified: boolean;
                                                name: string;
                                                image: string | null | undefined;
                                                createdAt: Date;
                                                updatedAt: Date;
                                            };
                                        }>;
                                        options: {
                                            method: "POST";
                                            body: zod.ZodObject<{
                                                code: zod.ZodString;
                                                disableSession: zod.ZodOptional<zod.ZodBoolean>;
                                                trustDevice: zod.ZodOptional<zod.ZodBoolean>;
                                            }, "strip", zod.ZodTypeAny, {
                                                code: string;
                                                trustDevice?: boolean | undefined;
                                                disableSession?: boolean | undefined;
                                            }, {
                                                code: string;
                                                trustDevice?: boolean | undefined;
                                                disableSession?: boolean | undefined;
                                            }>;
                                            metadata: {
                                                openapi: {
                                                    description: string;
                                                    responses: {
                                                        "200": {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            user: {
                                                                                type: string;
                                                                                properties: {
                                                                                    id: {
                                                                                        type: string;
                                                                                        description: string;
                                                                                    };
                                                                                    email: {
                                                                                        type: string;
                                                                                        format: string;
                                                                                        nullable: boolean;
                                                                                        description: string;
                                                                                    };
                                                                                    emailVerified: {
                                                                                        type: string;
                                                                                        nullable: boolean;
                                                                                        description: string;
                                                                                    };
                                                                                    name: {
                                                                                        type: string;
                                                                                        nullable: boolean;
                                                                                        description: string;
                                                                                    };
                                                                                    image: {
                                                                                        type: string;
                                                                                        format: string;
                                                                                        nullable: boolean;
                                                                                        description: string;
                                                                                    };
                                                                                    twoFactorEnabled: {
                                                                                        type: string;
                                                                                        description: string;
                                                                                    };
                                                                                    createdAt: {
                                                                                        type: string;
                                                                                        format: string;
                                                                                        description: string;
                                                                                    };
                                                                                    updatedAt: {
                                                                                        type: string;
                                                                                        format: string;
                                                                                        description: string;
                                                                                    };
                                                                                };
                                                                                required: string[];
                                                                                description: string;
                                                                            };
                                                                            session: {
                                                                                type: string;
                                                                                properties: {
                                                                                    token: {
                                                                                        type: string;
                                                                                        description: string;
                                                                                    };
                                                                                    userId: {
                                                                                        type: string;
                                                                                        description: string;
                                                                                    };
                                                                                    createdAt: {
                                                                                        type: string;
                                                                                        format: string;
                                                                                        description: string;
                                                                                    };
                                                                                    expiresAt: {
                                                                                        type: string;
                                                                                        format: string;
                                                                                        description: string;
                                                                                    };
                                                                                };
                                                                                required: string[];
                                                                                description: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/two-factor/verify-backup-code";
                                    };
                                    generateBackupCodes: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
                                                password: string;
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: better_call.Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                status: boolean;
                                                backupCodes: string[];
                                            };
                                        } : {
                                            status: boolean;
                                            backupCodes: string[];
                                        }>;
                                        options: {
                                            method: "POST";
                                            body: zod.ZodObject<{
                                                password: zod.ZodString;
                                            }, "strip", zod.ZodTypeAny, {
                                                password: string;
                                            }, {
                                                password: string;
                                            }>;
                                            use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                                                session: {
                                                    session: Record<string, any> & {
                                                        id: string;
                                                        createdAt: Date;
                                                        updatedAt: Date;
                                                        userId: string;
                                                        expiresAt: Date;
                                                        token: string;
                                                        ipAddress?: string | null | undefined;
                                                        userAgent?: string | null | undefined;
                                                    };
                                                    user: Record<string, any> & {
                                                        id: string;
                                                        name: string;
                                                        email: string;
                                                        emailVerified: boolean;
                                                        createdAt: Date;
                                                        updatedAt: Date;
                                                        image?: string | null | undefined;
                                                    };
                                                };
                                            }>)[];
                                            metadata: {
                                                openapi: {
                                                    description: string;
                                                    responses: {
                                                        "200": {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            status: {
                                                                                type: string;
                                                                                description: string;
                                                                                enum: boolean[];
                                                                            };
                                                                            backupCodes: {
                                                                                type: string;
                                                                                items: {
                                                                                    type: string;
                                                                                };
                                                                                description: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/two-factor/generate-backup-codes";
                                    };
                                    viewBackupCodes: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
                                                userId: string;
                                            };
                                        } & {
                                            method?: "GET" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: better_call.Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                status: boolean;
                                                backupCodes: string[];
                                            };
                                        } : {
                                            status: boolean;
                                            backupCodes: string[];
                                        }>;
                                        options: {
                                            method: "GET";
                                            body: zod.ZodObject<{
                                                userId: zod.ZodString;
                                            }, "strip", zod.ZodTypeAny, {
                                                userId: string;
                                            }, {
                                                userId: string;
                                            }>;
                                            metadata: {
                                                SERVER_ONLY: true;
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/two-factor/view-backup-codes";
                                    };
                                    sendTwoFactorOTP: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                                            body?: {
                                                trustDevice?: boolean | undefined;
                                            } | undefined;
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: better_call.Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                status: boolean;
                                            };
                                        } : {
                                            status: boolean;
                                        }>;
                                        options: {
                                            method: "POST";
                                            body: zod.ZodOptional<zod.ZodObject<{
                                                trustDevice: zod.ZodOptional<zod.ZodBoolean>;
                                            }, "strip", zod.ZodTypeAny, {
                                                trustDevice?: boolean | undefined;
                                            }, {
                                                trustDevice?: boolean | undefined;
                                            }>>;
                                            metadata: {
                                                openapi: {
                                                    summary: string;
                                                    description: string;
                                                    responses: {
                                                        200: {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            status: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/two-factor/send-otp";
                                    };
                                    verifyTwoFactorOTP: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
                                                code: string;
                                                trustDevice?: boolean | undefined;
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: better_call.Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                token: string;
                                                user: {
                                                    id: any;
                                                    email: any;
                                                    emailVerified: any;
                                                    name: any;
                                                    image: any;
                                                    createdAt: any;
                                                    updatedAt: any;
                                                };
                                            };
                                        } : {
                                            token: string;
                                            user: {
                                                id: any;
                                                email: any;
                                                emailVerified: any;
                                                name: any;
                                                image: any;
                                                createdAt: any;
                                                updatedAt: any;
                                            };
                                        }>;
                                        options: {
                                            method: "POST";
                                            body: zod.ZodObject<{
                                                code: zod.ZodString;
                                                trustDevice: zod.ZodOptional<zod.ZodBoolean>;
                                            }, "strip", zod.ZodTypeAny, {
                                                code: string;
                                                trustDevice?: boolean | undefined;
                                            }, {
                                                code: string;
                                                trustDevice?: boolean | undefined;
                                            }>;
                                            metadata: {
                                                openapi: {
                                                    summary: string;
                                                    description: string;
                                                    responses: {
                                                        "200": {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            token: {
                                                                                type: string;
                                                                                description: string;
                                                                            };
                                                                            user: {
                                                                                type: string;
                                                                                properties: {
                                                                                    id: {
                                                                                        type: string;
                                                                                        description: string;
                                                                                    };
                                                                                    email: {
                                                                                        type: string;
                                                                                        format: string;
                                                                                        nullable: boolean;
                                                                                        description: string;
                                                                                    };
                                                                                    emailVerified: {
                                                                                        type: string;
                                                                                        nullable: boolean;
                                                                                        description: string;
                                                                                    };
                                                                                    name: {
                                                                                        type: string;
                                                                                        nullable: boolean;
                                                                                        description: string;
                                                                                    };
                                                                                    image: {
                                                                                        type: string;
                                                                                        format: string;
                                                                                        nullable: boolean;
                                                                                        description: string;
                                                                                    };
                                                                                    createdAt: {
                                                                                        type: string;
                                                                                        format: string;
                                                                                        description: string;
                                                                                    };
                                                                                    updatedAt: {
                                                                                        type: string;
                                                                                        format: string;
                                                                                        description: string;
                                                                                    };
                                                                                };
                                                                                required: string[];
                                                                                description: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/two-factor/verify-otp";
                                    };
                                    generateTOTP: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
                                                secret: string;
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: better_call.Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                code: string;
                                            };
                                        } : {
                                            code: string;
                                        }>;
                                        options: {
                                            method: "POST";
                                            body: zod.ZodObject<{
                                                secret: zod.ZodString;
                                            }, "strip", zod.ZodTypeAny, {
                                                secret: string;
                                            }, {
                                                secret: string;
                                            }>;
                                            metadata: {
                                                openapi: {
                                                    summary: string;
                                                    description: string;
                                                    responses: {
                                                        200: {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            code: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                SERVER_ONLY: true;
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/totp/generate";
                                    };
                                    getTOTPURI: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
                                                password: string;
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: better_call.Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                totpURI: string;
                                            };
                                        } : {
                                            totpURI: string;
                                        }>;
                                        options: {
                                            method: "POST";
                                            use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                                                session: {
                                                    session: Record<string, any> & {
                                                        id: string;
                                                        createdAt: Date;
                                                        updatedAt: Date;
                                                        userId: string;
                                                        expiresAt: Date;
                                                        token: string;
                                                        ipAddress?: string | null | undefined;
                                                        userAgent?: string | null | undefined;
                                                    };
                                                    user: Record<string, any> & {
                                                        id: string;
                                                        name: string;
                                                        email: string;
                                                        emailVerified: boolean;
                                                        createdAt: Date;
                                                        updatedAt: Date;
                                                        image?: string | null | undefined;
                                                    };
                                                };
                                            }>)[];
                                            body: zod.ZodObject<{
                                                password: zod.ZodString;
                                            }, "strip", zod.ZodTypeAny, {
                                                password: string;
                                            }, {
                                                password: string;
                                            }>;
                                            metadata: {
                                                openapi: {
                                                    summary: string;
                                                    description: string;
                                                    responses: {
                                                        200: {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            totpURI: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/two-factor/get-totp-uri";
                                    };
                                    verifyTOTP: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
                                                code: string;
                                                trustDevice?: boolean | undefined;
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: better_call.Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                token: string;
                                                user: {
                                                    id: string;
                                                    email: string;
                                                    emailVerified: boolean;
                                                    name: string;
                                                    image: string | null | undefined;
                                                    createdAt: Date;
                                                    updatedAt: Date;
                                                };
                                            };
                                        } : {
                                            token: string;
                                            user: {
                                                id: string;
                                                email: string;
                                                emailVerified: boolean;
                                                name: string;
                                                image: string | null | undefined;
                                                createdAt: Date;
                                                updatedAt: Date;
                                            };
                                        }>;
                                        options: {
                                            method: "POST";
                                            body: zod.ZodObject<{
                                                code: zod.ZodString;
                                                trustDevice: zod.ZodOptional<zod.ZodBoolean>;
                                            }, "strip", zod.ZodTypeAny, {
                                                code: string;
                                                trustDevice?: boolean | undefined;
                                            }, {
                                                code: string;
                                                trustDevice?: boolean | undefined;
                                            }>;
                                            metadata: {
                                                openapi: {
                                                    summary: string;
                                                    description: string;
                                                    responses: {
                                                        200: {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            status: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/two-factor/verify-totp";
                                    };
                                };
                                options: better_auth_plugins.TwoFactorOptions | undefined;
                                hooks: {
                                    after: {
                                        matcher(context: better_auth.HookEndpointContext): boolean;
                                        handler: (inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                                            twoFactorRedirect: boolean;
                                        } | undefined>;
                                    }[];
                                };
                                schema: {
                                    user: {
                                        fields: {
                                            twoFactorEnabled: {
                                                type: "boolean";
                                                required: false;
                                                defaultValue: false;
                                                input: false;
                                            };
                                        };
                                    };
                                    twoFactor: {
                                        fields: {
                                            secret: {
                                                type: "string";
                                                required: true;
                                                returned: false;
                                            };
                                            backupCodes: {
                                                type: "string";
                                                required: true;
                                                returned: false;
                                            };
                                            userId: {
                                                type: "string";
                                                required: true;
                                                returned: false;
                                                references: {
                                                    model: string;
                                                    field: string;
                                                };
                                            };
                                        };
                                    };
                                };
                                rateLimit: {
                                    pathMatcher(path: string): boolean;
                                    window: number;
                                    max: number;
                                }[];
                                $ERROR_CODES: {
                                    readonly OTP_NOT_ENABLED: "OTP not enabled";
                                    readonly OTP_HAS_EXPIRED: "OTP has expired";
                                    readonly TOTP_NOT_ENABLED: "TOTP not enabled";
                                    readonly TWO_FACTOR_NOT_ENABLED: "Two factor isn't enabled";
                                    readonly BACKUP_CODES_NOT_ENABLED: "Backup codes aren't enabled";
                                    readonly INVALID_BACKUP_CODE: "Invalid backup code";
                                    readonly INVALID_CODE: "Invalid code";
                                    readonly TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE: "Too many attempts. Please request a new code.";
                                    readonly INVALID_TWO_FACTOR_COOKIE: "Invalid two factor cookie";
                                };
                            } | {
                                id: "expo";
                                init: (ctx: better_auth.AuthContext) => {
                                    options: {
                                        trustedOrigins: string[];
                                    };
                                };
                                onRequest(request: Request, ctx: better_auth.AuthContext): Promise<{
                                    request: Request;
                                } | undefined>;
                                hooks: {
                                    after: {
                                        matcher(context: better_auth.HookEndpointContext): boolean;
                                        handler: (inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>;
                                    }[];
                                };
                            } | {
                                id: "custom-session";
                                endpoints: {
                                    getSession: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body?: undefined;
                                        } & {
                                            method?: "GET" | undefined;
                                        } & {
                                            query?: {
                                                disableCookieCache?: string | boolean | undefined;
                                                disableRefresh?: boolean | undefined;
                                            } | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: better_call.Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                user: {
                                                    id: string;
                                                    name: string;
                                                    email: string;
                                                    emailVerified: boolean;
                                                    createdAt: Date;
                                                    updatedAt: Date;
                                                    image?: string | null | undefined | undefined;
                                                } & {
                                                    image: string | null;
                                                    handle: string | null;
                                                    twoFactorEnabled: boolean | null;
                                                    socialLinks: Record<string, string> | null;
                                                    bio: string | null;
                                                    website: string | null;
                                                };
                                                session: {
                                                    id: string;
                                                    createdAt: Date;
                                                    updatedAt: Date;
                                                    userId: string;
                                                    expiresAt: Date;
                                                    token: string;
                                                    ipAddress?: string | null | undefined | undefined;
                                                    userAgent?: string | null | undefined | undefined;
                                                };
                                                invitation: boolean | {
                                                    code: string;
                                                    createdAt: Date | null;
                                                    usedAt: Date | null;
                                                    fromUserId: string;
                                                    toUserId: string | null;
                                                } | undefined;
                                                role: "user" | "trial";
                                            } | null;
                                        } : {
                                            user: {
                                                id: string;
                                                name: string;
                                                email: string;
                                                emailVerified: boolean;
                                                createdAt: Date;
                                                updatedAt: Date;
                                                image?: string | null | undefined | undefined;
                                            } & {
                                                image: string | null;
                                                handle: string | null;
                                                twoFactorEnabled: boolean | null;
                                                socialLinks: Record<string, string> | null;
                                                bio: string | null;
                                                website: string | null;
                                            };
                                            session: {
                                                id: string;
                                                createdAt: Date;
                                                updatedAt: Date;
                                                userId: string;
                                                expiresAt: Date;
                                                token: string;
                                                ipAddress?: string | null | undefined | undefined;
                                                userAgent?: string | null | undefined | undefined;
                                            };
                                            invitation: boolean | {
                                                code: string;
                                                createdAt: Date | null;
                                                usedAt: Date | null;
                                                fromUserId: string;
                                                toUserId: string | null;
                                            } | undefined;
                                            role: "user" | "trial";
                                        } | null>;
                                        options: {
                                            method: "GET";
                                            query: zod.ZodOptional<zod.ZodObject<{
                                                disableCookieCache: zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>;
                                                disableRefresh: zod.ZodOptional<zod.ZodBoolean>;
                                            }, "strip", zod.ZodTypeAny, {
                                                disableCookieCache?: boolean | undefined;
                                                disableRefresh?: boolean | undefined;
                                            }, {
                                                disableCookieCache?: string | boolean | undefined;
                                                disableRefresh?: boolean | undefined;
                                            }>>;
                                            metadata: {
                                                CUSTOM_SESSION: boolean;
                                                openapi: {
                                                    description: string;
                                                    responses: {
                                                        "200": {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "array";
                                                                        nullable: boolean;
                                                                        items: {
                                                                            $ref: string;
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                            requireHeaders: true;
                                        } & {
                                            use: any[];
                                        };
                                        path: "/get-session";
                                    };
                                };
                            } | {
                                id: "customGetProviders";
                                endpoints: {
                                    customGetProviders: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                                            body?: undefined;
                                        } & {
                                            method?: "GET" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: better_call.Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: any;
                                        } : any>;
                                        options: {
                                            method: "GET";
                                        } & {
                                            use: any[];
                                        };
                                        path: "/get-providers";
                                    };
                                };
                            } | {
                                id: "getAccountInfo";
                                endpoints: {
                                    getAccountInfo: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                                            body?: undefined;
                                        } & {
                                            method?: "GET" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: better_call.Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: ({
                                                id: string;
                                                provider: string;
                                                profile: {
                                                    id: string;
                                                    name?: string;
                                                    email?: string | null;
                                                    image?: string;
                                                    emailVerified: boolean;
                                                };
                                                accountId?: undefined;
                                            } | {
                                                id: string;
                                                accountId: string;
                                                provider: string;
                                                profile: {
                                                    id: string;
                                                    name?: string;
                                                    email?: string | null;
                                                    image?: string;
                                                    emailVerified: boolean;
                                                } | undefined;
                                            })[] | null;
                                        } : ({
                                            id: string;
                                            provider: string;
                                            profile: {
                                                id: string;
                                                name?: string;
                                                email?: string | null;
                                                image?: string;
                                                emailVerified: boolean;
                                            };
                                            accountId?: undefined;
                                        } | {
                                            id: string;
                                            accountId: string;
                                            provider: string;
                                            profile: {
                                                id: string;
                                                name?: string;
                                                email?: string | null;
                                                image?: string;
                                                emailVerified: boolean;
                                            } | undefined;
                                        })[] | null>;
                                        options: {
                                            method: "GET";
                                        } & {
                                            use: any[];
                                        };
                                        path: "/get-account-info";
                                    };
                                };
                            } | {
                                id: "oneTimeToken";
                                endpoints: {
                                    generateOneTimeToken: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                                            body?: undefined;
                                        } & {
                                            method?: "GET" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: better_call.Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                token: string;
                                            };
                                        } : {
                                            token: string;
                                        }>;
                                        options: {
                                            method: "GET";
                                            use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                                                session: {
                                                    session: Record<string, any> & {
                                                        id: string;
                                                        createdAt: Date;
                                                        updatedAt: Date;
                                                        userId: string;
                                                        expiresAt: Date;
                                                        token: string;
                                                        ipAddress?: string | null | undefined;
                                                        userAgent?: string | null | undefined;
                                                    };
                                                    user: Record<string, any> & {
                                                        id: string;
                                                        name: string;
                                                        email: string;
                                                        emailVerified: boolean;
                                                        createdAt: Date;
                                                        updatedAt: Date;
                                                        image?: string | null | undefined;
                                                    };
                                                };
                                            }>)[];
                                        } & {
                                            use: any[];
                                        };
                                        path: "/one-time-token/generate";
                                    };
                                    applyOneTimeToken: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
                                                token: string;
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: better_call.Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                user: {
                                                    id: string;
                                                    name: string;
                                                    email: string;
                                                    emailVerified: boolean;
                                                    createdAt: Date;
                                                    updatedAt: Date;
                                                    image?: string | null | undefined;
                                                } & Record<string, any>;
                                            };
                                        } : {
                                            user: {
                                                id: string;
                                                name: string;
                                                email: string;
                                                emailVerified: boolean;
                                                createdAt: Date;
                                                updatedAt: Date;
                                                image?: string | null | undefined;
                                            } & Record<string, any>;
                                        }>;
                                        options: {
                                            method: "POST";
                                            body: zod.ZodObject<{
                                                token: zod.ZodString;
                                            }, "strip", zod.ZodTypeAny, {
                                                token: string;
                                            }, {
                                                token: string;
                                            }>;
                                        } & {
                                            use: any[];
                                        };
                                        path: "/one-time-token/apply";
                                    };
                                };
                            })[];
                        }>> & {
                            name?: string;
                            image?: string;
                        };
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/update-user";
        };
        deleteUser: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    success: boolean;
                    message: string;
                };
            } : {
                success: boolean;
                message: string;
            }>;
            options: {
                method: "POST";
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    password: zod.ZodOptional<zod.ZodString>;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                }, {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                    description: string;
                                                };
                                                message: {
                                                    type: string;
                                                    enum: string[];
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/delete-user";
        };
        forgetPasswordCallback: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query: {
                    callbackURL: string;
                };
            } & {
                params: {
                    token: string;
                };
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: never;
            } : never>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    callbackURL: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    callbackURL: string;
                }, {
                    callbackURL: string;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/reset-password/:token";
        };
        listSessions: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: better_auth.Prettify<{
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined | undefined;
                    userAgent?: string | null | undefined | undefined;
                }>[];
            } : better_auth.Prettify<{
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                expiresAt: Date;
                token: string;
                ipAddress?: string | null | undefined | undefined;
                userAgent?: string | null | undefined | undefined;
            }>[]>;
            options: {
                method: "GET";
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            items: {
                                                $ref: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/list-sessions";
        };
        revokeSession: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    token: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    token: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                }, {
                    token: string;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            token: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-session";
        };
        revokeSessions: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-sessions";
        };
        revokeOtherSessions: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-other-sessions";
        };
        linkSocialAccount: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "kick" | "zoom";
                    scopes?: string[] | undefined;
                    callbackURL?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    url: string;
                    redirect: boolean;
                };
            } : {
                url: string;
                redirect: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodEnum<["github", ...("apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "kick" | "zoom")[]]>;
                    scopes: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "kick" | "zoom";
                    scopes?: string[] | undefined;
                    callbackURL?: string | undefined;
                }, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "kick" | "zoom";
                    scopes?: string[] | undefined;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                url: {
                                                    type: string;
                                                    description: string;
                                                };
                                                redirect: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/link-social";
        };
        listUserAccounts: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    id: string;
                    provider: string;
                    createdAt: Date;
                    updatedAt: Date;
                    accountId: string;
                    scopes: string[];
                }[];
            } : {
                id: string;
                provider: string;
                createdAt: Date;
                updatedAt: Date;
                accountId: string;
                scopes: string[];
            }[]>;
            options: {
                method: "GET";
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            items: {
                                                type: string;
                                                properties: {
                                                    id: {
                                                        type: string;
                                                    };
                                                    provider: {
                                                        type: string;
                                                    };
                                                    createdAt: {
                                                        type: string;
                                                        format: string;
                                                    };
                                                    updatedAt: {
                                                        type: string;
                                                        format: string;
                                                    };
                                                };
                                                accountId: {
                                                    type: string;
                                                };
                                                scopes: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                    };
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/list-accounts";
        };
        deleteUserCallback: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query: {
                    token: string;
                    callbackURL?: string | undefined;
                };
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    success: boolean;
                    message: string;
                };
            } : {
                success: boolean;
                message: string;
            }>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                    description: string;
                                                };
                                                message: {
                                                    type: string;
                                                    enum: string[];
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/delete-user/callback";
        };
        unlinkAccount: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    providerId: string;
                    accountId?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    providerId: zod.ZodString;
                    accountId: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    providerId: string;
                    accountId?: string | undefined;
                }, {
                    providerId: string;
                    accountId?: string | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/unlink-account";
        };
        refreshToken: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: better_auth.OAuth2Tokens;
            } : better_auth.OAuth2Tokens>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    providerId: zod.ZodString;
                    accountId: zod.ZodOptional<zod.ZodString>;
                    userId: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                }, {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                tokenType: {
                                                    type: string;
                                                };
                                                idToken: {
                                                    type: string;
                                                };
                                                accessToken: {
                                                    type: string;
                                                };
                                                refreshToken: {
                                                    type: string;
                                                };
                                                accessTokenExpiresAt: {
                                                    type: string;
                                                    format: string;
                                                };
                                                refreshTokenExpiresAt: {
                                                    type: string;
                                                    format: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            400: {
                                description: string;
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/refresh-token";
        };
        getAccessToken: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    accessToken: string | undefined;
                    accessTokenExpiresAt: Date | undefined;
                    scopes: string[];
                    idToken: string | undefined;
                };
            } : {
                accessToken: string | undefined;
                accessTokenExpiresAt: Date | undefined;
                scopes: string[];
                idToken: string | undefined;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    providerId: zod.ZodString;
                    accountId: zod.ZodOptional<zod.ZodString>;
                    userId: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                }, {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                tokenType: {
                                                    type: string;
                                                };
                                                idToken: {
                                                    type: string;
                                                };
                                                accessToken: {
                                                    type: string;
                                                };
                                                refreshToken: {
                                                    type: string;
                                                };
                                                accessTokenExpiresAt: {
                                                    type: string;
                                                    format: string;
                                                };
                                                refreshTokenExpiresAt: {
                                                    type: string;
                                                    format: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            400: {
                                description: string;
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/get-access-token";
        };
    } & {
        generateOpenAPISchema: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    openapi: string;
                    info: {
                        title: string;
                        description: string;
                        version: string;
                    };
                    components: {
                        securitySchemes: {
                            apiKeyCookie: {
                                type: string;
                                in: string;
                                name: string;
                                description: string;
                            };
                            bearerAuth: {
                                type: string;
                                scheme: string;
                                description: string;
                            };
                        };
                        schemas: {};
                    };
                    security: {
                        apiKeyCookie: never[];
                        bearerAuth: never[];
                    }[];
                    servers: {
                        url: string;
                    }[];
                    tags: {
                        name: string;
                        description: string;
                    }[];
                    paths: Record<string, better_auth_plugins.Path>;
                };
            } : {
                openapi: string;
                info: {
                    title: string;
                    description: string;
                    version: string;
                };
                components: {
                    securitySchemes: {
                        apiKeyCookie: {
                            type: string;
                            in: string;
                            name: string;
                            description: string;
                        };
                        bearerAuth: {
                            type: string;
                            scheme: string;
                            description: string;
                        };
                    };
                    schemas: {};
                };
                security: {
                    apiKeyCookie: never[];
                    bearerAuth: never[];
                }[];
                servers: {
                    url: string;
                }[];
                tags: {
                    name: string;
                    description: string;
                }[];
                paths: Record<string, better_auth_plugins.Path>;
            }>;
            options: {
                method: "GET";
            } & {
                use: any[];
            };
            path: "/open-api/generate-schema";
        };
        openAPIReference: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: Response;
            } : Response>;
            options: {
                method: "GET";
                metadata: {
                    isAction: boolean;
                };
            } & {
                use: any[];
            };
            path: "/reference";
        };
    } & {
        customGetProviders: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: any;
            } : any>;
            options: {
                method: "GET";
            } & {
                use: any[];
            };
            path: "/get-providers";
        };
    } & {
        getAccountInfo: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: ({
                    id: string;
                    provider: string;
                    profile: {
                        id: string;
                        name?: string;
                        email?: string | null;
                        image?: string;
                        emailVerified: boolean;
                    };
                    accountId?: undefined;
                } | {
                    id: string;
                    accountId: string;
                    provider: string;
                    profile: {
                        id: string;
                        name?: string;
                        email?: string | null;
                        image?: string;
                        emailVerified: boolean;
                    } | undefined;
                })[] | null;
            } : ({
                id: string;
                provider: string;
                profile: {
                    id: string;
                    name?: string;
                    email?: string | null;
                    image?: string;
                    emailVerified: boolean;
                };
                accountId?: undefined;
            } | {
                id: string;
                accountId: string;
                provider: string;
                profile: {
                    id: string;
                    name?: string;
                    email?: string | null;
                    image?: string;
                    emailVerified: boolean;
                } | undefined;
            })[] | null>;
            options: {
                method: "GET";
            } & {
                use: any[];
            };
            path: "/get-account-info";
        };
    } & {
        generateOneTimeToken: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    token: string;
                };
            } : {
                token: string;
            }>;
            options: {
                method: "GET";
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
            } & {
                use: any[];
            };
            path: "/one-time-token/generate";
        };
        applyOneTimeToken: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    token: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    user: {
                        id: string;
                        name: string;
                        email: string;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                        image?: string | null | undefined;
                    } & Record<string, any>;
                };
            } : {
                user: {
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined;
                } & Record<string, any>;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    token: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                }, {
                    token: string;
                }>;
            } & {
                use: any[];
            };
            path: "/one-time-token/apply";
        };
    } & {
        enableTwoFactor: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    password: string;
                    issuer?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    totpURI: string;
                    backupCodes: string[];
                };
            } : {
                totpURI: string;
                backupCodes: string[];
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    password: zod.ZodString;
                    issuer: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    password: string;
                    issuer?: string | undefined;
                }, {
                    password: string;
                    issuer?: string | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                totpURI: {
                                                    type: string;
                                                    description: string;
                                                };
                                                backupCodes: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                    };
                                                    description: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/two-factor/enable";
        };
        disableTwoFactor: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    password: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    password: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    password: string;
                }, {
                    password: string;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/two-factor/disable";
        };
        verifyBackupCode: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    code: string;
                    trustDevice?: boolean | undefined;
                    disableSession?: boolean | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    token: string | undefined;
                    user: {
                        id: string;
                        email: string;
                        emailVerified: boolean;
                        name: string;
                        image: string | null | undefined;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                token: string | undefined;
                user: {
                    id: string;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image: string | null | undefined;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    code: zod.ZodString;
                    disableSession: zod.ZodOptional<zod.ZodBoolean>;
                    trustDevice: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    code: string;
                    trustDevice?: boolean | undefined;
                    disableSession?: boolean | undefined;
                }, {
                    code: string;
                    trustDevice?: boolean | undefined;
                    disableSession?: boolean | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        twoFactorEnabled: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                    description: string;
                                                };
                                                session: {
                                                    type: string;
                                                    properties: {
                                                        token: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        userId: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        expiresAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/two-factor/verify-backup-code";
        };
        generateBackupCodes: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    password: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                    backupCodes: string[];
                };
            } : {
                status: boolean;
                backupCodes: string[];
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    password: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    password: string;
                }, {
                    password: string;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                    enum: boolean[];
                                                };
                                                backupCodes: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                    };
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/two-factor/generate-backup-codes";
        };
        viewBackupCodes: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    userId: string;
                };
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                    backupCodes: string[];
                };
            } : {
                status: boolean;
                backupCodes: string[];
            }>;
            options: {
                method: "GET";
                body: zod.ZodObject<{
                    userId: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    userId: string;
                }, {
                    userId: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
                };
            } & {
                use: any[];
            };
            path: "/two-factor/view-backup-codes";
        };
        sendTwoFactorOTP: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: {
                    trustDevice?: boolean | undefined;
                } | undefined;
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodOptional<zod.ZodObject<{
                    trustDevice: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    trustDevice?: boolean | undefined;
                }, {
                    trustDevice?: boolean | undefined;
                }>>;
                metadata: {
                    openapi: {
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/two-factor/send-otp";
        };
        verifyTwoFactorOTP: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    code: string;
                    trustDevice?: boolean | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    token: string;
                    user: {
                        id: any;
                        email: any;
                        emailVerified: any;
                        name: any;
                        image: any;
                        createdAt: any;
                        updatedAt: any;
                    };
                };
            } : {
                token: string;
                user: {
                    id: any;
                    email: any;
                    emailVerified: any;
                    name: any;
                    image: any;
                    createdAt: any;
                    updatedAt: any;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    code: zod.ZodString;
                    trustDevice: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    code: string;
                    trustDevice?: boolean | undefined;
                }, {
                    code: string;
                    trustDevice?: boolean | undefined;
                }>;
                metadata: {
                    openapi: {
                        summary: string;
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                    description: string;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/two-factor/verify-otp";
        };
        generateTOTP: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    secret: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    code: string;
                };
            } : {
                code: string;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    secret: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    secret: string;
                }, {
                    secret: string;
                }>;
                metadata: {
                    openapi: {
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                code: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    SERVER_ONLY: true;
                };
            } & {
                use: any[];
            };
            path: "/totp/generate";
        };
        getTOTPURI: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    password: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    totpURI: string;
                };
            } : {
                totpURI: string;
            }>;
            options: {
                method: "POST";
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                body: zod.ZodObject<{
                    password: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    password: string;
                }, {
                    password: string;
                }>;
                metadata: {
                    openapi: {
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                totpURI: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/two-factor/get-totp-uri";
        };
        verifyTOTP: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    code: string;
                    trustDevice?: boolean | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    token: string;
                    user: {
                        id: string;
                        email: string;
                        emailVerified: boolean;
                        name: string;
                        image: string | null | undefined;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                token: string;
                user: {
                    id: string;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image: string | null | undefined;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    code: zod.ZodString;
                    trustDevice: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    code: string;
                    trustDevice?: boolean | undefined;
                }, {
                    code: string;
                    trustDevice?: boolean | undefined;
                }>;
                metadata: {
                    openapi: {
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/two-factor/verify-totp";
        };
    } & {
        getSession: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: boolean | undefined;
                } | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    user: {
                        id: string;
                        name: string;
                        email: string;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                        image?: string | null | undefined | undefined;
                    } & {
                        image: string | null;
                        handle: string | null;
                        twoFactorEnabled: boolean | null;
                        socialLinks: Record<string, string> | null;
                        bio: string | null;
                        website: string | null;
                    };
                    session: {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        userId: string;
                        expiresAt: Date;
                        token: string;
                        ipAddress?: string | null | undefined | undefined;
                        userAgent?: string | null | undefined | undefined;
                    };
                    invitation: boolean | {
                        code: string;
                        createdAt: Date | null;
                        usedAt: Date | null;
                        fromUserId: string;
                        toUserId: string | null;
                    } | undefined;
                    role: "user" | "trial";
                } | null;
            } : {
                user: {
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined | undefined;
                } & {
                    image: string | null;
                    handle: string | null;
                    twoFactorEnabled: boolean | null;
                    socialLinks: Record<string, string> | null;
                    bio: string | null;
                    website: string | null;
                };
                session: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined | undefined;
                    userAgent?: string | null | undefined | undefined;
                };
                invitation: boolean | {
                    code: string;
                    createdAt: Date | null;
                    usedAt: Date | null;
                    fromUserId: string;
                    toUserId: string | null;
                } | undefined;
                role: "user" | "trial";
            } | null>;
            options: {
                method: "GET";
                query: zod.ZodOptional<zod.ZodObject<{
                    disableCookieCache: zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>;
                    disableRefresh: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    disableCookieCache?: boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }, {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }>>;
                metadata: {
                    CUSTOM_SESSION: boolean;
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            nullable: boolean;
                                            items: {
                                                $ref: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                requireHeaders: true;
            } & {
                use: any[];
            };
            path: "/get-session";
        };
    }>;
    options: {
        appName: string;
        database: (options: BetterAuthOptions) => better_auth.Adapter;
        advanced: {
            database: {
                generateId: false;
            };
            defaultCookieAttributes: {
                sameSite: "none";
                secure: true;
            };
        };
        session: {
            updateAge: number;
            expiresIn: number;
        };
        basePath: string;
        trustedOrigins: string[];
        user: {
            additionalFields: {
                handle: {
                    type: "string";
                };
                socialLinks: {
                    type: "string";
                    transform: {
                        input: (value: string | number | boolean | string[] | Date | number[] | null | undefined) => string;
                        output: (value: string | number | boolean | string[] | Date | number[] | null | undefined) => any;
                    };
                };
                bio: {
                    type: "string";
                };
                website: {
                    type: "string";
                };
            };
            changeEmail: {
                enabled: true;
                sendChangeEmailVerification: ({ user, url }: {
                    user: better_auth.User;
                    newEmail: string;
                    url: string;
                    token: string;
                }) => Promise<void>;
            };
        };
        account: {
            accountLinking: {
                enabled: true;
                trustedProviders: ("github" | "apple" | "google")[];
                allowDifferentEmails: true;
            };
        };
        socialProviders: {
            google: {
                clientId: string;
                clientSecret: string;
            };
            github: {
                clientId: string;
                clientSecret: string;
            };
            apple: {
                enabled: boolean;
                clientId: string;
                clientSecret: string;
                appBundleIdentifier: string | undefined;
            };
        };
        emailAndPassword: {
            enabled: true;
            sendResetPassword({ user, url }: {
                user: better_auth.User;
                url: string;
                token: string;
            }): Promise<void>;
        };
        emailVerification: {
            sendOnSignUp: true;
            sendVerificationEmail({ user, url }: {
                user: better_auth.User;
                url: string;
                token: string;
            }): Promise<void>;
        };
        plugins: ({
            id: "open-api";
            endpoints: {
                generateOpenAPISchema: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                        body?: undefined;
                    } & {
                        method?: "GET" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: better_call.Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            openapi: string;
                            info: {
                                title: string;
                                description: string;
                                version: string;
                            };
                            components: {
                                securitySchemes: {
                                    apiKeyCookie: {
                                        type: string;
                                        in: string;
                                        name: string;
                                        description: string;
                                    };
                                    bearerAuth: {
                                        type: string;
                                        scheme: string;
                                        description: string;
                                    };
                                };
                                schemas: {};
                            };
                            security: {
                                apiKeyCookie: never[];
                                bearerAuth: never[];
                            }[];
                            servers: {
                                url: string;
                            }[];
                            tags: {
                                name: string;
                                description: string;
                            }[];
                            paths: Record<string, better_auth_plugins.Path>;
                        };
                    } : {
                        openapi: string;
                        info: {
                            title: string;
                            description: string;
                            version: string;
                        };
                        components: {
                            securitySchemes: {
                                apiKeyCookie: {
                                    type: string;
                                    in: string;
                                    name: string;
                                    description: string;
                                };
                                bearerAuth: {
                                    type: string;
                                    scheme: string;
                                    description: string;
                                };
                            };
                            schemas: {};
                        };
                        security: {
                            apiKeyCookie: never[];
                            bearerAuth: never[];
                        }[];
                        servers: {
                            url: string;
                        }[];
                        tags: {
                            name: string;
                            description: string;
                        }[];
                        paths: Record<string, better_auth_plugins.Path>;
                    }>;
                    options: {
                        method: "GET";
                    } & {
                        use: any[];
                    };
                    path: "/open-api/generate-schema";
                };
                openAPIReference: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                        body?: undefined;
                    } & {
                        method?: "GET" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: better_call.Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: Response;
                    } : Response>;
                    options: {
                        method: "GET";
                        metadata: {
                            isAction: boolean;
                        };
                    } & {
                        use: any[];
                    };
                    path: "/reference";
                };
            };
        } | {
            id: "two-factor";
            endpoints: {
                enableTwoFactor: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
                            password: string;
                            issuer?: string | undefined;
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: better_call.Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            totpURI: string;
                            backupCodes: string[];
                        };
                    } : {
                        totpURI: string;
                        backupCodes: string[];
                    }>;
                    options: {
                        method: "POST";
                        body: zod.ZodObject<{
                            password: zod.ZodString;
                            issuer: zod.ZodOptional<zod.ZodString>;
                        }, "strip", zod.ZodTypeAny, {
                            password: string;
                            issuer?: string | undefined;
                        }, {
                            password: string;
                            issuer?: string | undefined;
                        }>;
                        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                            session: {
                                session: Record<string, any> & {
                                    id: string;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    userId: string;
                                    expiresAt: Date;
                                    token: string;
                                    ipAddress?: string | null | undefined;
                                    userAgent?: string | null | undefined;
                                };
                                user: Record<string, any> & {
                                    id: string;
                                    name: string;
                                    email: string;
                                    emailVerified: boolean;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    image?: string | null | undefined;
                                };
                            };
                        }>)[];
                        metadata: {
                            openapi: {
                                summary: string;
                                description: string;
                                responses: {
                                    200: {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        totpURI: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        backupCodes: {
                                                            type: string;
                                                            items: {
                                                                type: string;
                                                            };
                                                            description: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/two-factor/enable";
                };
                disableTwoFactor: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
                            password: string;
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: better_call.Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            status: boolean;
                        };
                    } : {
                        status: boolean;
                    }>;
                    options: {
                        method: "POST";
                        body: zod.ZodObject<{
                            password: zod.ZodString;
                        }, "strip", zod.ZodTypeAny, {
                            password: string;
                        }, {
                            password: string;
                        }>;
                        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                            session: {
                                session: Record<string, any> & {
                                    id: string;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    userId: string;
                                    expiresAt: Date;
                                    token: string;
                                    ipAddress?: string | null | undefined;
                                    userAgent?: string | null | undefined;
                                };
                                user: Record<string, any> & {
                                    id: string;
                                    name: string;
                                    email: string;
                                    emailVerified: boolean;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    image?: string | null | undefined;
                                };
                            };
                        }>)[];
                        metadata: {
                            openapi: {
                                summary: string;
                                description: string;
                                responses: {
                                    200: {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        status: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/two-factor/disable";
                };
                verifyBackupCode: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
                            code: string;
                            trustDevice?: boolean | undefined;
                            disableSession?: boolean | undefined;
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: better_call.Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            token: string | undefined;
                            user: {
                                id: string;
                                email: string;
                                emailVerified: boolean;
                                name: string;
                                image: string | null | undefined;
                                createdAt: Date;
                                updatedAt: Date;
                            };
                        };
                    } : {
                        token: string | undefined;
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image: string | null | undefined;
                            createdAt: Date;
                            updatedAt: Date;
                        };
                    }>;
                    options: {
                        method: "POST";
                        body: zod.ZodObject<{
                            code: zod.ZodString;
                            disableSession: zod.ZodOptional<zod.ZodBoolean>;
                            trustDevice: zod.ZodOptional<zod.ZodBoolean>;
                        }, "strip", zod.ZodTypeAny, {
                            code: string;
                            trustDevice?: boolean | undefined;
                            disableSession?: boolean | undefined;
                        }, {
                            code: string;
                            trustDevice?: boolean | undefined;
                            disableSession?: boolean | undefined;
                        }>;
                        metadata: {
                            openapi: {
                                description: string;
                                responses: {
                                    "200": {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        user: {
                                                            type: string;
                                                            properties: {
                                                                id: {
                                                                    type: string;
                                                                    description: string;
                                                                };
                                                                email: {
                                                                    type: string;
                                                                    format: string;
                                                                    nullable: boolean;
                                                                    description: string;
                                                                };
                                                                emailVerified: {
                                                                    type: string;
                                                                    nullable: boolean;
                                                                    description: string;
                                                                };
                                                                name: {
                                                                    type: string;
                                                                    nullable: boolean;
                                                                    description: string;
                                                                };
                                                                image: {
                                                                    type: string;
                                                                    format: string;
                                                                    nullable: boolean;
                                                                    description: string;
                                                                };
                                                                twoFactorEnabled: {
                                                                    type: string;
                                                                    description: string;
                                                                };
                                                                createdAt: {
                                                                    type: string;
                                                                    format: string;
                                                                    description: string;
                                                                };
                                                                updatedAt: {
                                                                    type: string;
                                                                    format: string;
                                                                    description: string;
                                                                };
                                                            };
                                                            required: string[];
                                                            description: string;
                                                        };
                                                        session: {
                                                            type: string;
                                                            properties: {
                                                                token: {
                                                                    type: string;
                                                                    description: string;
                                                                };
                                                                userId: {
                                                                    type: string;
                                                                    description: string;
                                                                };
                                                                createdAt: {
                                                                    type: string;
                                                                    format: string;
                                                                    description: string;
                                                                };
                                                                expiresAt: {
                                                                    type: string;
                                                                    format: string;
                                                                    description: string;
                                                                };
                                                            };
                                                            required: string[];
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/two-factor/verify-backup-code";
                };
                generateBackupCodes: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
                            password: string;
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: better_call.Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            status: boolean;
                            backupCodes: string[];
                        };
                    } : {
                        status: boolean;
                        backupCodes: string[];
                    }>;
                    options: {
                        method: "POST";
                        body: zod.ZodObject<{
                            password: zod.ZodString;
                        }, "strip", zod.ZodTypeAny, {
                            password: string;
                        }, {
                            password: string;
                        }>;
                        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                            session: {
                                session: Record<string, any> & {
                                    id: string;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    userId: string;
                                    expiresAt: Date;
                                    token: string;
                                    ipAddress?: string | null | undefined;
                                    userAgent?: string | null | undefined;
                                };
                                user: Record<string, any> & {
                                    id: string;
                                    name: string;
                                    email: string;
                                    emailVerified: boolean;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    image?: string | null | undefined;
                                };
                            };
                        }>)[];
                        metadata: {
                            openapi: {
                                description: string;
                                responses: {
                                    "200": {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        status: {
                                                            type: string;
                                                            description: string;
                                                            enum: boolean[];
                                                        };
                                                        backupCodes: {
                                                            type: string;
                                                            items: {
                                                                type: string;
                                                            };
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/two-factor/generate-backup-codes";
                };
                viewBackupCodes: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
                            userId: string;
                        };
                    } & {
                        method?: "GET" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: better_call.Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            status: boolean;
                            backupCodes: string[];
                        };
                    } : {
                        status: boolean;
                        backupCodes: string[];
                    }>;
                    options: {
                        method: "GET";
                        body: zod.ZodObject<{
                            userId: zod.ZodString;
                        }, "strip", zod.ZodTypeAny, {
                            userId: string;
                        }, {
                            userId: string;
                        }>;
                        metadata: {
                            SERVER_ONLY: true;
                        };
                    } & {
                        use: any[];
                    };
                    path: "/two-factor/view-backup-codes";
                };
                sendTwoFactorOTP: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                        body?: {
                            trustDevice?: boolean | undefined;
                        } | undefined;
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: better_call.Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            status: boolean;
                        };
                    } : {
                        status: boolean;
                    }>;
                    options: {
                        method: "POST";
                        body: zod.ZodOptional<zod.ZodObject<{
                            trustDevice: zod.ZodOptional<zod.ZodBoolean>;
                        }, "strip", zod.ZodTypeAny, {
                            trustDevice?: boolean | undefined;
                        }, {
                            trustDevice?: boolean | undefined;
                        }>>;
                        metadata: {
                            openapi: {
                                summary: string;
                                description: string;
                                responses: {
                                    200: {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        status: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/two-factor/send-otp";
                };
                verifyTwoFactorOTP: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
                            code: string;
                            trustDevice?: boolean | undefined;
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: better_call.Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            token: string;
                            user: {
                                id: any;
                                email: any;
                                emailVerified: any;
                                name: any;
                                image: any;
                                createdAt: any;
                                updatedAt: any;
                            };
                        };
                    } : {
                        token: string;
                        user: {
                            id: any;
                            email: any;
                            emailVerified: any;
                            name: any;
                            image: any;
                            createdAt: any;
                            updatedAt: any;
                        };
                    }>;
                    options: {
                        method: "POST";
                        body: zod.ZodObject<{
                            code: zod.ZodString;
                            trustDevice: zod.ZodOptional<zod.ZodBoolean>;
                        }, "strip", zod.ZodTypeAny, {
                            code: string;
                            trustDevice?: boolean | undefined;
                        }, {
                            code: string;
                            trustDevice?: boolean | undefined;
                        }>;
                        metadata: {
                            openapi: {
                                summary: string;
                                description: string;
                                responses: {
                                    "200": {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        token: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        user: {
                                                            type: string;
                                                            properties: {
                                                                id: {
                                                                    type: string;
                                                                    description: string;
                                                                };
                                                                email: {
                                                                    type: string;
                                                                    format: string;
                                                                    nullable: boolean;
                                                                    description: string;
                                                                };
                                                                emailVerified: {
                                                                    type: string;
                                                                    nullable: boolean;
                                                                    description: string;
                                                                };
                                                                name: {
                                                                    type: string;
                                                                    nullable: boolean;
                                                                    description: string;
                                                                };
                                                                image: {
                                                                    type: string;
                                                                    format: string;
                                                                    nullable: boolean;
                                                                    description: string;
                                                                };
                                                                createdAt: {
                                                                    type: string;
                                                                    format: string;
                                                                    description: string;
                                                                };
                                                                updatedAt: {
                                                                    type: string;
                                                                    format: string;
                                                                    description: string;
                                                                };
                                                            };
                                                            required: string[];
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/two-factor/verify-otp";
                };
                generateTOTP: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
                            secret: string;
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: better_call.Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            code: string;
                        };
                    } : {
                        code: string;
                    }>;
                    options: {
                        method: "POST";
                        body: zod.ZodObject<{
                            secret: zod.ZodString;
                        }, "strip", zod.ZodTypeAny, {
                            secret: string;
                        }, {
                            secret: string;
                        }>;
                        metadata: {
                            openapi: {
                                summary: string;
                                description: string;
                                responses: {
                                    200: {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        code: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            SERVER_ONLY: true;
                        };
                    } & {
                        use: any[];
                    };
                    path: "/totp/generate";
                };
                getTOTPURI: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
                            password: string;
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: better_call.Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            totpURI: string;
                        };
                    } : {
                        totpURI: string;
                    }>;
                    options: {
                        method: "POST";
                        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                            session: {
                                session: Record<string, any> & {
                                    id: string;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    userId: string;
                                    expiresAt: Date;
                                    token: string;
                                    ipAddress?: string | null | undefined;
                                    userAgent?: string | null | undefined;
                                };
                                user: Record<string, any> & {
                                    id: string;
                                    name: string;
                                    email: string;
                                    emailVerified: boolean;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    image?: string | null | undefined;
                                };
                            };
                        }>)[];
                        body: zod.ZodObject<{
                            password: zod.ZodString;
                        }, "strip", zod.ZodTypeAny, {
                            password: string;
                        }, {
                            password: string;
                        }>;
                        metadata: {
                            openapi: {
                                summary: string;
                                description: string;
                                responses: {
                                    200: {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        totpURI: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/two-factor/get-totp-uri";
                };
                verifyTOTP: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
                            code: string;
                            trustDevice?: boolean | undefined;
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: better_call.Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            token: string;
                            user: {
                                id: string;
                                email: string;
                                emailVerified: boolean;
                                name: string;
                                image: string | null | undefined;
                                createdAt: Date;
                                updatedAt: Date;
                            };
                        };
                    } : {
                        token: string;
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image: string | null | undefined;
                            createdAt: Date;
                            updatedAt: Date;
                        };
                    }>;
                    options: {
                        method: "POST";
                        body: zod.ZodObject<{
                            code: zod.ZodString;
                            trustDevice: zod.ZodOptional<zod.ZodBoolean>;
                        }, "strip", zod.ZodTypeAny, {
                            code: string;
                            trustDevice?: boolean | undefined;
                        }, {
                            code: string;
                            trustDevice?: boolean | undefined;
                        }>;
                        metadata: {
                            openapi: {
                                summary: string;
                                description: string;
                                responses: {
                                    200: {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        status: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/two-factor/verify-totp";
                };
            };
            options: better_auth_plugins.TwoFactorOptions | undefined;
            hooks: {
                after: {
                    matcher(context: better_auth.HookEndpointContext): boolean;
                    handler: (inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                        twoFactorRedirect: boolean;
                    } | undefined>;
                }[];
            };
            schema: {
                user: {
                    fields: {
                        twoFactorEnabled: {
                            type: "boolean";
                            required: false;
                            defaultValue: false;
                            input: false;
                        };
                    };
                };
                twoFactor: {
                    fields: {
                        secret: {
                            type: "string";
                            required: true;
                            returned: false;
                        };
                        backupCodes: {
                            type: "string";
                            required: true;
                            returned: false;
                        };
                        userId: {
                            type: "string";
                            required: true;
                            returned: false;
                            references: {
                                model: string;
                                field: string;
                            };
                        };
                    };
                };
            };
            rateLimit: {
                pathMatcher(path: string): boolean;
                window: number;
                max: number;
            }[];
            $ERROR_CODES: {
                readonly OTP_NOT_ENABLED: "OTP not enabled";
                readonly OTP_HAS_EXPIRED: "OTP has expired";
                readonly TOTP_NOT_ENABLED: "TOTP not enabled";
                readonly TWO_FACTOR_NOT_ENABLED: "Two factor isn't enabled";
                readonly BACKUP_CODES_NOT_ENABLED: "Backup codes aren't enabled";
                readonly INVALID_BACKUP_CODE: "Invalid backup code";
                readonly INVALID_CODE: "Invalid code";
                readonly TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE: "Too many attempts. Please request a new code.";
                readonly INVALID_TWO_FACTOR_COOKIE: "Invalid two factor cookie";
            };
        } | {
            id: "expo";
            init: (ctx: better_auth.AuthContext) => {
                options: {
                    trustedOrigins: string[];
                };
            };
            onRequest(request: Request, ctx: better_auth.AuthContext): Promise<{
                request: Request;
            } | undefined>;
            hooks: {
                after: {
                    matcher(context: better_auth.HookEndpointContext): boolean;
                    handler: (inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>;
                }[];
            };
        } | {
            id: "custom-session";
            endpoints: {
                getSession: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body?: undefined;
                    } & {
                        method?: "GET" | undefined;
                    } & {
                        query?: {
                            disableCookieCache?: string | boolean | undefined;
                            disableRefresh?: boolean | undefined;
                        } | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: better_call.Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            user: {
                                id: string;
                                name: string;
                                email: string;
                                emailVerified: boolean;
                                createdAt: Date;
                                updatedAt: Date;
                                image?: string | null | undefined | undefined;
                            } & {
                                image: string | null;
                                handle: string | null;
                                twoFactorEnabled: boolean | null;
                                socialLinks: Record<string, string> | null;
                                bio: string | null;
                                website: string | null;
                            };
                            session: {
                                id: string;
                                createdAt: Date;
                                updatedAt: Date;
                                userId: string;
                                expiresAt: Date;
                                token: string;
                                ipAddress?: string | null | undefined | undefined;
                                userAgent?: string | null | undefined | undefined;
                            };
                            invitation: boolean | {
                                code: string;
                                createdAt: Date | null;
                                usedAt: Date | null;
                                fromUserId: string;
                                toUserId: string | null;
                            } | undefined;
                            role: "user" | "trial";
                        } | null;
                    } : {
                        user: {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined | undefined;
                        } & {
                            image: string | null;
                            handle: string | null;
                            twoFactorEnabled: boolean | null;
                            socialLinks: Record<string, string> | null;
                            bio: string | null;
                            website: string | null;
                        };
                        session: {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined | undefined;
                            userAgent?: string | null | undefined | undefined;
                        };
                        invitation: boolean | {
                            code: string;
                            createdAt: Date | null;
                            usedAt: Date | null;
                            fromUserId: string;
                            toUserId: string | null;
                        } | undefined;
                        role: "user" | "trial";
                    } | null>;
                    options: {
                        method: "GET";
                        query: zod.ZodOptional<zod.ZodObject<{
                            disableCookieCache: zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>;
                            disableRefresh: zod.ZodOptional<zod.ZodBoolean>;
                        }, "strip", zod.ZodTypeAny, {
                            disableCookieCache?: boolean | undefined;
                            disableRefresh?: boolean | undefined;
                        }, {
                            disableCookieCache?: string | boolean | undefined;
                            disableRefresh?: boolean | undefined;
                        }>>;
                        metadata: {
                            CUSTOM_SESSION: boolean;
                            openapi: {
                                description: string;
                                responses: {
                                    "200": {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "array";
                                                    nullable: boolean;
                                                    items: {
                                                        $ref: string;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        requireHeaders: true;
                    } & {
                        use: any[];
                    };
                    path: "/get-session";
                };
            };
        } | {
            id: "customGetProviders";
            endpoints: {
                customGetProviders: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                        body?: undefined;
                    } & {
                        method?: "GET" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: better_call.Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: any;
                    } : any>;
                    options: {
                        method: "GET";
                    } & {
                        use: any[];
                    };
                    path: "/get-providers";
                };
            };
        } | {
            id: "getAccountInfo";
            endpoints: {
                getAccountInfo: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                        body?: undefined;
                    } & {
                        method?: "GET" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: better_call.Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: ({
                            id: string;
                            provider: string;
                            profile: {
                                id: string;
                                name?: string;
                                email?: string | null;
                                image?: string;
                                emailVerified: boolean;
                            };
                            accountId?: undefined;
                        } | {
                            id: string;
                            accountId: string;
                            provider: string;
                            profile: {
                                id: string;
                                name?: string;
                                email?: string | null;
                                image?: string;
                                emailVerified: boolean;
                            } | undefined;
                        })[] | null;
                    } : ({
                        id: string;
                        provider: string;
                        profile: {
                            id: string;
                            name?: string;
                            email?: string | null;
                            image?: string;
                            emailVerified: boolean;
                        };
                        accountId?: undefined;
                    } | {
                        id: string;
                        accountId: string;
                        provider: string;
                        profile: {
                            id: string;
                            name?: string;
                            email?: string | null;
                            image?: string;
                            emailVerified: boolean;
                        } | undefined;
                    })[] | null>;
                    options: {
                        method: "GET";
                    } & {
                        use: any[];
                    };
                    path: "/get-account-info";
                };
            };
        } | {
            id: "oneTimeToken";
            endpoints: {
                generateOneTimeToken: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                        body?: undefined;
                    } & {
                        method?: "GET" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: better_call.Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            token: string;
                        };
                    } : {
                        token: string;
                    }>;
                    options: {
                        method: "GET";
                        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                            session: {
                                session: Record<string, any> & {
                                    id: string;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    userId: string;
                                    expiresAt: Date;
                                    token: string;
                                    ipAddress?: string | null | undefined;
                                    userAgent?: string | null | undefined;
                                };
                                user: Record<string, any> & {
                                    id: string;
                                    name: string;
                                    email: string;
                                    emailVerified: boolean;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    image?: string | null | undefined;
                                };
                            };
                        }>)[];
                    } & {
                        use: any[];
                    };
                    path: "/one-time-token/generate";
                };
                applyOneTimeToken: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
                            token: string;
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: better_call.Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            user: {
                                id: string;
                                name: string;
                                email: string;
                                emailVerified: boolean;
                                createdAt: Date;
                                updatedAt: Date;
                                image?: string | null | undefined;
                            } & Record<string, any>;
                        };
                    } : {
                        user: {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        } & Record<string, any>;
                    }>;
                    options: {
                        method: "POST";
                        body: zod.ZodObject<{
                            token: zod.ZodString;
                        }, "strip", zod.ZodTypeAny, {
                            token: string;
                        }, {
                            token: string;
                        }>;
                    } & {
                        use: any[];
                    };
                    path: "/one-time-token/apply";
                };
            };
        })[];
    };
    $context: Promise<better_auth.AuthContext>;
    $Infer: {
        Session: {
            session: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                expiresAt: Date;
                token: string;
                ipAddress?: string | null | undefined | undefined;
                userAgent?: string | null | undefined | undefined;
            };
            user: {
                id: string;
                name: string;
                email: string;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
                image?: string | null | undefined | undefined;
                handle: string;
                bio: string;
                website: string;
                socialLinks: string;
                twoFactorEnabled: boolean | null | undefined;
            };
        };
    };
    $ERROR_CODES: {
        readonly OTP_NOT_ENABLED: "OTP not enabled";
        readonly OTP_HAS_EXPIRED: "OTP has expired";
        readonly TOTP_NOT_ENABLED: "TOTP not enabled";
        readonly TWO_FACTOR_NOT_ENABLED: "Two factor isn't enabled";
        readonly BACKUP_CODES_NOT_ENABLED: "Backup codes aren't enabled";
        readonly INVALID_BACKUP_CODE: "Invalid backup code";
        readonly INVALID_CODE: "Invalid code";
        readonly TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE: "Too many attempts. Please request a new code.";
        readonly INVALID_TWO_FACTOR_COOKIE: "Invalid two factor cookie";
    } & {
        USER_NOT_FOUND: string;
        FAILED_TO_CREATE_USER: string;
        FAILED_TO_CREATE_SESSION: string;
        FAILED_TO_UPDATE_USER: string;
        FAILED_TO_GET_SESSION: string;
        INVALID_PASSWORD: string;
        INVALID_EMAIL: string;
        INVALID_EMAIL_OR_PASSWORD: string;
        SOCIAL_ACCOUNT_ALREADY_LINKED: string;
        PROVIDER_NOT_FOUND: string;
        INVALID_TOKEN: string;
        ID_TOKEN_NOT_SUPPORTED: string;
        FAILED_TO_GET_USER_INFO: string;
        USER_EMAIL_NOT_FOUND: string;
        EMAIL_NOT_VERIFIED: string;
        PASSWORD_TOO_SHORT: string;
        PASSWORD_TOO_LONG: string;
        USER_ALREADY_EXISTS: string;
        EMAIL_CAN_NOT_BE_UPDATED: string;
        CREDENTIAL_ACCOUNT_NOT_FOUND: string;
        SESSION_EXPIRED: string;
        FAILED_TO_UNLINK_LAST_ACCOUNT: string;
        ACCOUNT_NOT_FOUND: string;
    };
};

type AuthSession = Awaited<ReturnType<typeof auth.api.getSession>>;
type AuthUser = NonNullable<AuthSession>["user"];

declare const _routes: hono_hono_base.HonoBase<Env, ({
    "/better-auth/*": {
        $get: {
            input: {};
            output: {};
            outputFormat: string;
            status: hono_utils_http_status.StatusCode;
        };
    };
} & {
    "/better-auth/*": {
        $post: {
            input: {};
            output: {};
            outputFormat: string;
            status: hono_utils_http_status.StatusCode;
        };
    };
}) | hono_types.MergeSchemaPath<{
    "/": {
        $get: {
            input: {
                query: {
                    type?: "checking" | "completed" | "incomplete" | "audit" | "received" | "all" | undefined;
                };
            };
            output: {
                code: number;
                data: {
                    id: string;
                    userId: string;
                    type: "checking" | "completed" | "incomplete" | "audit" | "received";
                    actionId: number;
                    progress: number;
                    progressMax: number;
                    done: boolean;
                    doneAt: string | null;
                    tx: string | null;
                    power: string;
                }[];
                done: number;
                total: number;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $put: {
            input: {
                json: {
                    actionId: number;
                };
            };
            output: {
                code: number;
                data: {
                    actionId: number;
                    result: boolean;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/check": {
        $post: {
            input: {
                json: {
                    actionId: number;
                };
            };
            output: {
                code: number;
                data: {
                    actionId: number;
                    result: boolean;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/audit": {
        $post: {
            input: {
                json: {
                    actionId: number;
                    payload?: any;
                };
            };
            output: {
                code: number;
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/achievement"> | hono_types.MergeSchemaPath<{
    "/": {
        $get: {
            input: {};
            output: {
                code: 0;
                data?: {
                    createdAt: string | null;
                    updatedAt: string | null;
                    userId: string;
                    rules?: {
                        name: string;
                        condition: {
                            value: string;
                            field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
                            operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
                        }[] | {
                            value: string;
                            field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
                            operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
                        }[][];
                        result: {
                            disabled?: boolean | undefined;
                            translation?: boolean | "en" | "ja" | "zh-CN" | "zh-TW" | undefined;
                            summary?: boolean | undefined;
                            readability?: boolean | undefined;
                            sourceContent?: boolean | undefined;
                            silence?: boolean | undefined;
                            block?: boolean | undefined;
                            star?: boolean | undefined;
                            newEntryNotification?: boolean | undefined;
                            rewriteRules?: {
                                from: string;
                                to: string;
                            }[] | undefined;
                            blockRules?: {
                                value: string | number;
                                field: "title" | "content" | "all" | "author" | "url" | "order";
                                operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
                            }[] | undefined;
                            webhooks?: string[] | undefined;
                        };
                    }[] | null | undefined;
                } | undefined;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $put: {
            input: {
                json: {
                    rules?: {
                        name: string;
                        condition: {
                            value: string;
                            field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
                            operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
                        }[] | {
                            value: string;
                            field: "title" | "status" | "view" | "site_url" | "feed_url" | "category" | "entry_title" | "entry_content" | "entry_url" | "entry_author" | "entry_media_length" | "entry_attachments_duration";
                            operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
                        }[][];
                        result: {
                            disabled?: boolean | undefined;
                            translation?: boolean | "en" | "ja" | "zh-CN" | "zh-TW" | undefined;
                            summary?: boolean | undefined;
                            readability?: boolean | undefined;
                            sourceContent?: boolean | undefined;
                            silence?: boolean | undefined;
                            block?: boolean | undefined;
                            star?: boolean | undefined;
                            newEntryNotification?: boolean | undefined;
                            rewriteRules?: {
                                from: string;
                                to: string;
                            }[] | undefined;
                            blockRules?: {
                                value: string | number;
                                field: "title" | "content" | "all" | "author" | "url" | "order";
                                operator: "contains" | "not_contains" | "eq" | "not_eq" | "gt" | "lt" | "regex";
                            }[] | undefined;
                            webhooks?: string[] | undefined;
                        };
                    }[] | null | undefined;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/actions"> | hono_types.MergeSchemaPath<{
    "/translation": {
        $get: {
            input: {
                query: {
                    id: string;
                    language: "en" | "ja" | "zh-CN" | "zh-TW";
                    fields: string;
                    part?: string | undefined;
                };
            };
            output: {
                code: 0;
                data?: {
                    description?: string | undefined;
                    title?: string | undefined;
                    content?: string | undefined;
                    readabilityContent?: string | undefined;
                } | undefined;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/summary": {
        $get: {
            input: {
                query: {
                    id: string;
                    language?: "en" | "ja" | "zh-CN" | "zh-TW" | undefined;
                    target?: "content" | "readabilityContent" | undefined;
                };
            };
            output: {
                code: 0;
                data?: string | undefined;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/daily": {
        $get: {
            input: {
                query: {
                    view: "0" | "1";
                    startDate: string;
                };
            };
            output: {
                code: 0;
                data: string;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/chat": {
        $post: {
            input: {
                json: {
                    messages: {
                        content: string;
                        role: "user" | "assistant";
                    }[];
                };
            };
            output: Response;
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
}, "/ai"> | hono_types.MergeSchemaPath<{
    "/": {
        $get: {
            input: {
                query: {
                    view?: string | undefined;
                };
            };
            output: {
                data?: string[] | undefined;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $delete: {
            input: {
                json: {
                    feedIdList: string[];
                    deleteSubscriptions: boolean;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $patch: {
            input: {
                json: {
                    category: string;
                    feedIdList: string[];
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/categories"> | hono_types.MergeSchemaPath<{
    "/": {
        $get: {
            input: {
                query: {
                    entryId: string;
                };
            };
            output: {
                code: 0;
                data: boolean;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $post: {
            input: {
                json: {
                    entryId: string;
                    view?: number | undefined;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $delete: {
            input: {
                json: {
                    entryId: string;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/collections"> | hono_types.MergeSchemaPath<{
    "/": {
        $post: {
            input: {
                json: {
                    keyword: string;
                    target?: "feeds" | "lists" | undefined;
                };
            };
            output: {
                data: {
                    entries?: {
                        id: string;
                        description: string | null;
                        title: string | null;
                        content: string | null;
                        author: string | null;
                        url: string | null;
                        language: string | null;
                        feedId: string;
                        guid: string;
                        categories: string[] | null;
                        authorUrl: string | null;
                        authorAvatar: string | null;
                        insertedAt: string;
                        publishedAt: string;
                        media?: {
                            type: "photo" | "video";
                            url: string;
                            width?: number | undefined;
                            height?: number | undefined;
                            preview_image_url?: string | undefined;
                            blurhash?: string | undefined;
                        }[] | null | undefined;
                        attachments?: {
                            url: string;
                            title?: string | undefined;
                            duration_in_seconds?: string | number | undefined;
                            mime_type?: string | undefined;
                            size_in_bytes?: number | undefined;
                        }[] | null | undefined;
                        extra?: {
                            links?: {
                                type: string;
                                url: string;
                                content_html?: string | undefined;
                            }[] | null | undefined;
                        } | null | undefined;
                    }[] | undefined;
                    updatesPerWeek?: number | undefined;
                    subscriptionCount?: number | undefined;
                    feed?: {
                        id: string;
                        type: "feed";
                        url: string;
                        image?: string | null | undefined;
                        description?: string | null | undefined;
                        title?: string | null | undefined;
                        siteUrl?: string | null | undefined;
                        errorMessage?: string | null | undefined;
                        errorAt?: string | null | undefined;
                        ownerUserId?: string | null | undefined;
                        owner?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        } | null | undefined;
                        tipUsers?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        }[] | null | undefined;
                    } | undefined;
                    list?: {
                        id: string;
                        createdAt: string | null;
                        updatedAt: string | null;
                        type: "list";
                        view: number;
                        feedIds: string[];
                        fee: number;
                        image?: string | null | undefined;
                        description?: string | null | undefined;
                        title?: string | null | undefined;
                        feeds?: {
                            id: string;
                            type: "feed";
                            url: string;
                            image?: string | null | undefined;
                            description?: string | null | undefined;
                            title?: string | null | undefined;
                            siteUrl?: string | null | undefined;
                            errorMessage?: string | null | undefined;
                            errorAt?: string | null | undefined;
                            ownerUserId?: string | null | undefined;
                            owner?: {
                                id: string;
                                name: string | null;
                                emailVerified: boolean | null;
                                image: string | null;
                                handle: string | null;
                                createdAt: string;
                                updatedAt: string;
                                suspended: boolean | null;
                            } | null | undefined;
                            tipUsers?: {
                                id: string;
                                name: string | null;
                                emailVerified: boolean | null;
                                image: string | null;
                                handle: string | null;
                                createdAt: string;
                                updatedAt: string;
                                suspended: boolean | null;
                            }[] | null | undefined;
                        }[] | undefined;
                        ownerUserId?: string | null | undefined;
                        owner?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        } | null | undefined;
                    } | undefined;
                    docs?: string | undefined;
                    analytics?: {
                        view: number | null;
                        feedId: string;
                        updatesPerWeek: number | null;
                        subscriptionCount: number | null;
                        latestEntryPublishedAt: string | null;
                    } | undefined;
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/rsshub": {
        $get: {
            input: {
                query: {
                    category?: string | undefined;
                    categories?: string | undefined;
                    namespace?: string | undefined;
                    lang?: string | undefined;
                };
            };
            output: {
                data: {
                    [x: string]: {
                        name: string;
                        description: string;
                        url: string;
                        lang: string;
                        routes: {
                            [x: string]: {
                                path: string;
                                name: string;
                                example: string;
                                description: string;
                                categories: string[];
                                parameters: {
                                    [x: string]: string;
                                };
                                maintainers: string[];
                                location: string;
                                view?: number | undefined;
                            };
                        };
                    };
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/rsshub/route": {
        $get: {
            input: {
                query: {
                    route: string;
                };
            };
            output: {
                data: {
                    name: string;
                    description: string;
                    url: string;
                    prefix: string;
                    route?: any;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/rsshub-analytics": {
        $get: {
            input: {
                query: {
                    lang?: string | undefined;
                };
            };
            output: {
                data: {
                    [x: string]: {
                        subscriptionCount: number;
                        topFeeds: {
                            id: string;
                            type: "feed";
                            url: string;
                            image?: string | null | undefined;
                            description?: string | null | undefined;
                            title?: string | null | undefined;
                            siteUrl?: string | null | undefined;
                            errorMessage?: string | null | undefined;
                            errorAt?: string | null | undefined;
                            ownerUserId?: string | null | undefined;
                            owner?: {
                                id: string;
                                name: string | null;
                                emailVerified: boolean | null;
                                image: string | null;
                                handle: string | null;
                                createdAt: string;
                                updatedAt: string;
                                suspended: boolean | null;
                            } | null | undefined;
                            tipUsers?: {
                                id: string;
                                name: string | null;
                                emailVerified: boolean | null;
                                image: string | null;
                                handle: string | null;
                                createdAt: string;
                                updatedAt: string;
                                suspended: boolean | null;
                            }[] | null | undefined;
                        }[];
                    };
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/discover"> | hono_types.MergeSchemaPath<hono_types.MergeSchemaPath<{
    "/": {
        $post: {
            input: {
                json: {
                    inboxId: string;
                    read?: boolean | undefined;
                    limit?: number | undefined;
                    publishedAfter?: string | undefined;
                    publishedBefore?: string | undefined;
                };
            };
            output: {
                code: 0;
                remaining: number;
                data?: {
                    entries: {
                        id: string;
                        description: string | null;
                        title: string | null;
                        author: string | null;
                        url: string | null;
                        language: string | null;
                        guid: string;
                        categories: string[] | null;
                        authorUrl: string | null;
                        authorAvatar: string | null;
                        insertedAt: string;
                        publishedAt: string;
                        read: boolean | null;
                        inboxHandle: string;
                        media?: {
                            type: "photo" | "video";
                            url: string;
                            width?: number | undefined;
                            height?: number | undefined;
                            preview_image_url?: string | undefined;
                            blurhash?: string | undefined;
                        }[] | null | undefined;
                        attachments?: {
                            url: string;
                            title?: string | undefined;
                            duration_in_seconds?: string | number | undefined;
                            mime_type?: string | undefined;
                            size_in_bytes?: number | undefined;
                        }[] | null | undefined;
                        extra?: {
                            links?: {
                                type: string;
                                url: string;
                                content_html?: string | undefined;
                            }[] | null | undefined;
                        } | null | undefined;
                    };
                    feeds: {
                        id: string;
                        type: "inbox";
                        secret: string;
                        image?: string | null | undefined;
                        description?: string | null | undefined;
                        title?: string | null | undefined;
                        ownerUserId?: string | null | undefined;
                        owner?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        } | null | undefined;
                    };
                    read: boolean | null;
                    collections?: {
                        createdAt: string;
                    } | undefined;
                    settings?: {
                        disabled?: boolean | undefined;
                        translation?: boolean | "en" | "ja" | "zh-CN" | "zh-TW" | undefined;
                        summary?: boolean | undefined;
                        readability?: boolean | undefined;
                        sourceContent?: boolean | undefined;
                        silence?: boolean | undefined;
                        block?: boolean | undefined;
                        star?: boolean | undefined;
                        newEntryNotification?: boolean | undefined;
                        rewriteRules?: {
                            from: string;
                            to: string;
                        }[] | undefined;
                        webhooks?: string[] | undefined;
                    } | undefined;
                }[] | undefined;
                total?: number | undefined;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $get: {
            input: {
                query: {
                    id: string;
                };
            };
            output: {
                code: 0;
                data?: {
                    entries: {
                        id: string;
                        description: string | null;
                        title: string | null;
                        content: string | null;
                        author: string | null;
                        url: string | null;
                        language: string | null;
                        guid: string;
                        categories: string[] | null;
                        authorUrl: string | null;
                        authorAvatar: string | null;
                        insertedAt: string;
                        publishedAt: string;
                        read: boolean | null;
                        inboxHandle: string;
                        media?: {
                            type: "photo" | "video";
                            url: string;
                            width?: number | undefined;
                            height?: number | undefined;
                            preview_image_url?: string | undefined;
                            blurhash?: string | undefined;
                        }[] | null | undefined;
                        attachments?: {
                            url: string;
                            title?: string | undefined;
                            duration_in_seconds?: string | number | undefined;
                            mime_type?: string | undefined;
                            size_in_bytes?: number | undefined;
                        }[] | null | undefined;
                        extra?: {
                            links?: {
                                type: string;
                                url: string;
                                content_html?: string | undefined;
                            }[] | null | undefined;
                        } | null | undefined;
                    };
                    feeds: {
                        id: string;
                        type: "inbox";
                        secret: string;
                        image?: string | null | undefined;
                        description?: string | null | undefined;
                        title?: string | null | undefined;
                        ownerUserId?: string | null | undefined;
                        owner?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        } | null | undefined;
                    };
                } | undefined;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $delete: {
            input: {
                json: {
                    entryId: string;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/inbox"> & hono_types.MergeSchemaPath<{
    "/:id": {
        $get: {
            input: {
                param: {
                    id?: any;
                };
            } & {
                query: {
                    size?: number | undefined;
                    page?: number | undefined;
                };
            };
            output: {
                code: 0;
                data: {
                    users: {
                        [x: string]: {
                            id: string;
                            name: string | null;
                            image: string | null;
                            handle: string | null;
                        };
                    };
                    total: number;
                    entryReadHistories: {
                        userIds: string[];
                        readCount: number;
                    } | null;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/read-histories"> & hono_types.MergeSchemaPath<{
    "/": {
        $get: {
            input: {
                query: {
                    insertedAfter: number;
                    view?: number | undefined;
                    feedId?: string | undefined;
                    read?: string | undefined;
                    feedIdList?: string[] | undefined;
                };
            };
            output: {
                code: 0;
                data: {
                    has_new: boolean;
                    entry_id?: string | undefined;
                    lastest_at?: string | undefined;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/check-new"> & {
    "/": {
        $post: {
            input: {
                json: {
                    view?: number | undefined;
                    feedId?: string | undefined;
                    read?: boolean | undefined;
                    listId?: string | undefined;
                    limit?: number | undefined;
                    feedIdList?: string[] | undefined;
                    publishedAfter?: string | undefined;
                    publishedBefore?: string | undefined;
                    collected?: boolean | undefined;
                    isCollection?: boolean | undefined;
                    isArchived?: boolean | undefined;
                    withContent?: boolean | undefined;
                    excludePrivate?: boolean | undefined;
                };
            };
            output: {
                code: 0;
                data?: {
                    entries: {
                        id: string;
                        description: string | null;
                        title: string | null;
                        author: string | null;
                        url: string | null;
                        language: string | null;
                        guid: string;
                        categories: string[] | null;
                        authorUrl: string | null;
                        authorAvatar: string | null;
                        insertedAt: string;
                        publishedAt: string;
                        media?: {
                            type: "photo" | "video";
                            url: string;
                            width?: number | undefined;
                            height?: number | undefined;
                            preview_image_url?: string | undefined;
                            blurhash?: string | undefined;
                        }[] | null | undefined;
                        attachments?: {
                            url: string;
                            title?: string | undefined;
                            duration_in_seconds?: string | number | undefined;
                            mime_type?: string | undefined;
                            size_in_bytes?: number | undefined;
                        }[] | null | undefined;
                        extra?: {
                            links?: {
                                type: string;
                                url: string;
                                content_html?: string | undefined;
                            }[] | null | undefined;
                        } | null | undefined;
                    };
                    feeds: {
                        id: string;
                        type: "feed";
                        url: string;
                        image?: string | null | undefined;
                        description?: string | null | undefined;
                        title?: string | null | undefined;
                        siteUrl?: string | null | undefined;
                        errorMessage?: string | null | undefined;
                        errorAt?: string | null | undefined;
                        ownerUserId?: string | null | undefined;
                        owner?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        } | null | undefined;
                        tipUsers?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        }[] | null | undefined;
                    };
                    read: boolean | null;
                    view?: number | undefined;
                    from?: string[] | undefined;
                    collections?: {
                        createdAt: string;
                    } | undefined;
                    settings?: {
                        disabled?: boolean | undefined;
                        translation?: boolean | "en" | "ja" | "zh-CN" | "zh-TW" | undefined;
                        summary?: boolean | undefined;
                        readability?: boolean | undefined;
                        sourceContent?: boolean | undefined;
                        silence?: boolean | undefined;
                        block?: boolean | undefined;
                        star?: boolean | undefined;
                        newEntryNotification?: boolean | undefined;
                        rewriteRules?: {
                            from: string;
                            to: string;
                        }[] | undefined;
                        webhooks?: string[] | undefined;
                    } | undefined;
                }[] | undefined;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $get: {
            input: {
                query: {
                    id: string;
                };
            };
            output: {
                code: 0;
                data?: {
                    entries: {
                        id: string;
                        description: string | null;
                        title: string | null;
                        content: string | null;
                        author: string | null;
                        url: string | null;
                        language: string | null;
                        guid: string;
                        categories: string[] | null;
                        authorUrl: string | null;
                        authorAvatar: string | null;
                        insertedAt: string;
                        publishedAt: string;
                        media?: {
                            type: "photo" | "video";
                            url: string;
                            width?: number | undefined;
                            height?: number | undefined;
                            preview_image_url?: string | undefined;
                            blurhash?: string | undefined;
                        }[] | null | undefined;
                        attachments?: {
                            url: string;
                            title?: string | undefined;
                            duration_in_seconds?: string | number | undefined;
                            mime_type?: string | undefined;
                            size_in_bytes?: number | undefined;
                        }[] | null | undefined;
                        extra?: {
                            links?: {
                                type: string;
                                url: string;
                                content_html?: string | undefined;
                            }[] | null | undefined;
                        } | null | undefined;
                    };
                    feeds: {
                        id: string;
                        type: "feed";
                        url: string;
                        image?: string | null | undefined;
                        description?: string | null | undefined;
                        title?: string | null | undefined;
                        siteUrl?: string | null | undefined;
                        errorMessage?: string | null | undefined;
                        errorAt?: string | null | undefined;
                        ownerUserId?: string | null | undefined;
                        owner?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        } | null | undefined;
                        tipUsers?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        }[] | null | undefined;
                    };
                } | undefined;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/readability": {
        $get: {
            input: {
                query: {
                    id: string;
                };
            };
            output: {
                code: 0;
                data: {
                    content?: string | null | undefined;
                } | null;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/stream": {
        $post: {
            input: {
                json: {
                    ids: string[];
                };
            };
            output: {};
            outputFormat: "text";
            status: 200;
        };
    };
} & {
    "/preview": {
        $get: {
            input: {
                query: {
                    id: string;
                };
            };
            output: {
                code: 0;
                data: {
                    id: string;
                    description: string | null;
                    title: string | null;
                    content: string | null;
                    author: string | null;
                    url: string | null;
                    language: string | null;
                    feedId: string;
                    guid: string;
                    categories: string[] | null;
                    authorUrl: string | null;
                    authorAvatar: string | null;
                    insertedAt: string;
                    publishedAt: string;
                    media?: {
                        type: "photo" | "video";
                        url: string;
                        width?: number | undefined;
                        height?: number | undefined;
                        preview_image_url?: string | undefined;
                        blurhash?: string | undefined;
                    }[] | null | undefined;
                    attachments?: {
                        url: string;
                        title?: string | undefined;
                        duration_in_seconds?: string | number | undefined;
                        mime_type?: string | undefined;
                        size_in_bytes?: number | undefined;
                    }[] | null | undefined;
                    extra?: {
                        links?: {
                            type: string;
                            url: string;
                            content_html?: string | undefined;
                        }[] | null | undefined;
                    } | null | undefined;
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/entries"> | hono_types.MergeSchemaPath<hono_types.MergeSchemaPath<{
    "/message": {
        $get: {
            input: {
                query: {
                    feedId: string;
                };
            };
            output: {
                code: 0;
                data: {
                    json: string;
                    xml: string;
                    description: string;
                    content: string;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/challenge": {
        $post: {
            input: {
                json: {
                    feedId: string;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/list": {
        $get: {
            input: {};
            output: {
                code: 0;
                data: {
                    subscriptionCount: number;
                    feed: {
                        id: string;
                        type: "feed";
                        url: string;
                        image?: string | null | undefined;
                        description?: string | null | undefined;
                        title?: string | null | undefined;
                        siteUrl?: string | null | undefined;
                        errorMessage?: string | null | undefined;
                        errorAt?: string | null | undefined;
                        ownerUserId?: string | null | undefined;
                        owner?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        } | null | undefined;
                        tipUsers?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        }[] | null | undefined;
                    };
                    tipAmount: number;
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/claim"> & {
    "/": {
        $get: {
            input: {
                query: {
                    id?: string | undefined;
                    url?: string | undefined;
                    entriesLimit?: number | undefined;
                };
            };
            output: {
                code: 0;
                data: {
                    entries: {
                        description: string | null;
                        title: string | null;
                        author: string | null;
                        url: string | null;
                        language: string | null;
                        guid: string;
                        categories: string[] | null;
                        authorUrl: string | null;
                        authorAvatar: string | null;
                        publishedAt: string;
                        media?: {
                            type: "photo" | "video";
                            url: string;
                            width?: number | undefined;
                            height?: number | undefined;
                            preview_image_url?: string | undefined;
                            blurhash?: string | undefined;
                        }[] | null | undefined;
                        attachments?: {
                            url: string;
                            title?: string | undefined;
                            duration_in_seconds?: string | number | undefined;
                            mime_type?: string | undefined;
                            size_in_bytes?: number | undefined;
                        }[] | null | undefined;
                        extra?: {
                            links?: {
                                type: string;
                                url: string;
                                content_html?: string | undefined;
                            }[] | null | undefined;
                        } | null | undefined;
                    }[];
                    subscriptionCount: number;
                    feed: {
                        id: string;
                        type: "feed";
                        url: string;
                        image?: string | null | undefined;
                        description?: string | null | undefined;
                        title?: string | null | undefined;
                        siteUrl?: string | null | undefined;
                        errorMessage?: string | null | undefined;
                        errorAt?: string | null | undefined;
                        ownerUserId?: string | null | undefined;
                        owner?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        } | null | undefined;
                        tipUsers?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        }[] | null | undefined;
                    };
                    readCount: number;
                    analytics?: {
                        view: number | null;
                        feedId: string;
                        updatesPerWeek: number | null;
                        subscriptionCount: number | null;
                        latestEntryPublishedAt: string | null;
                    } | undefined;
                    subscription?: {
                        createdAt: string;
                        userId: string;
                        title: string | null;
                        view: number;
                        category: string | null;
                        feedId: string;
                        isPrivate: boolean;
                    } | undefined;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/refresh": {
        $get: {
            input: {
                query: {
                    id: string;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/reset": {
        $get: {
            input: {
                query: {
                    id: string;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/analytics": {
        $post: {
            input: {
                json: {
                    id: string[];
                };
            };
            output: {
                code: 0;
                data: {
                    analytics: {
                        [x: string]: {
                            view: number | null;
                            feedId: string;
                            updatesPerWeek: number | null;
                            subscriptionCount: number | null;
                            latestEntryPublishedAt: string | null;
                        };
                    };
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/feeds"> | hono_types.MergeSchemaPath<{
    "/new": {
        $post: {
            input: {
                json: {
                    TOTPCode?: string | undefined;
                };
            };
            output: {
                code: 0;
                data: string;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/use": {
        $post: {
            input: {
                json: {
                    code: string;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $get: {
            input: {};
            output: {
                code: 0;
                data: {
                    code: string;
                    createdAt: string | null;
                    users: {
                        id: string;
                        name: string | null;
                        image: string | null;
                    } | null;
                    usedAt: string | null;
                    toUserId: string | null;
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/limitation": {
        $get: {
            input: {};
            output: {
                code: 0;
                data: number;
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/invitations"> | hono_types.MergeSchemaPath<{
    "/": {
        $get: {
            input: {
                query: {
                    id?: string | undefined;
                    handle?: string | undefined;
                };
            };
            output: {
                code: 0;
                data: {
                    id: string;
                    name: string | null;
                    emailVerified: boolean | null;
                    image: string | null;
                    handle: string | null;
                    createdAt: string;
                    updatedAt: string;
                    twoFactorEnabled: boolean | null;
                    isAnonymous: boolean | null;
                    suspended: boolean | null;
                    bio: string | null;
                    website: string | null;
                    socialLinks: {
                        twitter: string;
                        github: string;
                        instagram: string;
                        facebook: string;
                        youtube: string;
                    } | null;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/batch": {
        $post: {
            input: {
                json: {
                    ids: string[];
                };
            };
            output: {
                code: 0;
                data: {
                    [x: string]: {
                        id: string;
                        name: string | null;
                        emailVerified: boolean | null;
                        image: string | null;
                        handle: string | null;
                        createdAt: string;
                        updatedAt: string;
                        twoFactorEnabled: boolean | null;
                        isAnonymous: boolean | null;
                        suspended: boolean | null;
                        bio: string | null;
                        website: string | null;
                        socialLinks: {
                            twitter: string;
                            github: string;
                            instagram: string;
                            facebook: string;
                            youtube: string;
                        } | null;
                    };
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/profiles"> | hono_types.MergeSchemaPath<{
    "/": {
        $post: {
            input: {
                json: {
                    entryIds: string[];
                    isInbox?: boolean | undefined;
                    readHistories?: string[] | undefined;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $delete: {
            input: {
                json: {
                    entryId: string;
                    isInbox?: boolean | undefined;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $get: {
            input: {
                query: {
                    view?: string | undefined;
                };
            };
            output: {
                code: 0;
                data: {
                    [x: string]: number;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/all": {
        $post: {
            input: {
                json: {
                    view?: number | undefined;
                    feedId?: string | undefined;
                    listId?: string | undefined;
                    feedIdList?: string[] | undefined;
                    inboxId?: string | undefined;
                    excludePrivate?: boolean | undefined;
                    startTime?: number | undefined;
                    endTime?: number | undefined;
                };
            };
            output: {
                code: 0;
                data: {
                    read: {
                        [x: string]: number;
                    };
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/total-count": {
        $get: {
            input: {};
            output: {
                code: 0;
                data: {
                    count: number;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/reads"> | hono_types.MergeSchemaPath<{
    "/": {
        $get: {
            input: {
                query: {
                    tab?: "general" | "appearance" | "integration" | undefined;
                };
            };
            output: {
                code: 0;
                settings: {
                    [x: string]: any;
                };
                updated: {
                    [x: string]: string;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/:tab": {
        $patch: {
            input: {
                param: {
                    tab: string;
                };
            } & {
                json: Record<string, any>;
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/settings"> | hono_types.MergeSchemaPath<{
    "/": {
        $get: {
            input: {
                query: {
                    userId?: string | undefined;
                    view?: string | undefined;
                };
            };
            output: {
                code: 0;
                data: ({
                    createdAt: string;
                    userId: string;
                    title: string | null;
                    view: number;
                    category: string | null;
                    feeds: {
                        id: string;
                        type: "feed";
                        url: string;
                        image?: string | null | undefined;
                        description?: string | null | undefined;
                        title?: string | null | undefined;
                        siteUrl?: string | null | undefined;
                        errorMessage?: string | null | undefined;
                        errorAt?: string | null | undefined;
                        ownerUserId?: string | null | undefined;
                        owner?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        } | null | undefined;
                        tipUsers?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        }[] | null | undefined;
                    };
                    feedId: string;
                    isPrivate: boolean;
                    boost: {
                        boosters: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            twoFactorEnabled: boolean | null;
                            isAnonymous: boolean | null;
                            suspended: boolean | null;
                            bio: string | null;
                            website: string | null;
                            socialLinks: {
                                twitter: string;
                                github: string;
                                instagram: string;
                                facebook: string;
                                youtube: string;
                            } | null;
                        }[];
                    };
                } | {
                    createdAt: string;
                    userId: string;
                    title: string | null;
                    view: number;
                    feedId: string;
                    isPrivate: boolean;
                    lists: {
                        id: string;
                        createdAt: string | null;
                        updatedAt: string | null;
                        type: "list";
                        view: number;
                        feedIds: string[];
                        fee: number;
                        image?: string | null | undefined;
                        description?: string | null | undefined;
                        title?: string | null | undefined;
                        feeds?: {
                            id: string;
                            type: "feed";
                            url: string;
                            image?: string | null | undefined;
                            description?: string | null | undefined;
                            title?: string | null | undefined;
                            siteUrl?: string | null | undefined;
                            errorMessage?: string | null | undefined;
                            errorAt?: string | null | undefined;
                            ownerUserId?: string | null | undefined;
                            owner?: {
                                id: string;
                                name: string | null;
                                emailVerified: boolean | null;
                                image: string | null;
                                handle: string | null;
                                createdAt: string;
                                updatedAt: string;
                                suspended: boolean | null;
                            } | null | undefined;
                            tipUsers?: {
                                id: string;
                                name: string | null;
                                emailVerified: boolean | null;
                                image: string | null;
                                handle: string | null;
                                createdAt: string;
                                updatedAt: string;
                                suspended: boolean | null;
                            }[] | null | undefined;
                        }[] | undefined;
                        ownerUserId?: string | null | undefined;
                        owner?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        } | null | undefined;
                    };
                    listId: string;
                    category?: string | undefined;
                } | {
                    createdAt: string;
                    userId: string;
                    title: string | null;
                    view: number;
                    category: string | null;
                    feedId: string;
                    isPrivate: boolean;
                    inboxes: {
                        id: string;
                        type: "inbox";
                        secret: string;
                        image?: string | null | undefined;
                        description?: string | null | undefined;
                        title?: string | null | undefined;
                        ownerUserId?: string | null | undefined;
                        owner?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        } | null | undefined;
                    };
                    inboxId: string;
                })[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $post: {
            input: {
                json: {
                    view: number;
                    title?: string | null | undefined;
                    category?: string | null | undefined;
                    url?: string | undefined;
                    isPrivate?: boolean | undefined;
                    listId?: string | undefined;
                    TOTPCode?: string | undefined;
                };
            };
            output: {
                code: 0;
                feed: {
                    id: string;
                    image: string | null;
                    description: string | null;
                    title: string | null;
                    url: string;
                    siteUrl: string | null;
                    checkedAt: string;
                    lastModifiedHeader: string | null;
                    etagHeader: string | null;
                    ttl: number | null;
                    errorMessage: string | null;
                    errorAt: string | null;
                    ownerUserId: string | null;
                    language: string | null;
                    migrateTo: string | null;
                    rsshubRoute: string | null;
                    rsshubNamespace: string | null;
                    nsfw: boolean | null;
                } | null;
                list: {
                    id: string;
                    image: string | null;
                    createdAt: string | null;
                    updatedAt: string | null;
                    description: string | null;
                    title: string;
                    view: number;
                    ownerUserId: string;
                    language: string | null;
                    feedIds: string[];
                    fee: number;
                } | null;
                unread: {
                    [x: string]: number;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $delete: {
            input: {
                json: {
                    url?: string | undefined;
                    feedId?: string | undefined;
                    listId?: string | undefined;
                    feedIdList?: string[] | undefined;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $patch: {
            input: {
                json: {
                    view: number;
                    title?: string | null | undefined;
                    category?: string | null | undefined;
                    feedId?: string | undefined;
                    isPrivate?: boolean | undefined;
                    listId?: string | undefined;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/export": {
        $get: {
            input: {
                query: {
                    RSSHubURL?: string | undefined;
                    folderMode?: "view" | "category" | undefined;
                };
            };
            output: {};
            outputFormat: string;
            status: 200;
        };
    };
} & {
    "/import": {
        $post: {
            input: {};
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/batch": {
        $patch: {
            input: {
                json: {
                    view: number;
                    feedIds: string[];
                    title?: string | null | undefined;
                    category?: string | null | undefined;
                    isPrivate?: boolean | undefined;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/parse-opml": {
        $post: {
            input: {};
            output: {
                code: 0;
                data: {
                    subscriptions: {
                        userId: string;
                        title: string | null;
                        view: number;
                        category: string | null;
                        url: string;
                    }[];
                    remaining: number;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/subscriptions"> | hono_types.MergeSchemaPath<hono_types.MergeSchemaPath<{
    "/": {
        $post: {
            input: {};
            output: {
                code: 0;
                data: {
                    transactionHash: string;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $get: {
            input: {};
            output: {
                code: 0;
                data: {
                    tx: string | null;
                    amount: string;
                    rank: string | null;
                    detail: {
                        "Invitations count": number;
                        "Purchase lists cost": number;
                        "Total tip amount": number;
                        "Feeds subscriptions count": number;
                        "Lists subscriptions count": number;
                        "Inbox subscriptions count": number;
                        "Recent read count in the last month": number;
                        "Mint count": number;
                        "Claimed feeds count": number;
                        "Claimed feeds subscriptions count": number;
                        "Lists with more than 1 feed count": number;
                        "Created lists subscriptions count": number;
                        "Created lists income amount": number;
                        "GitHub Community Contributions": number;
                        "Invitations count Rank": number;
                        "Purchase lists cost Rank": number;
                        "Total tip amount Rank": number;
                        "Feeds subscriptions count Rank": number;
                        "Lists subscriptions count Rank": number;
                        "Inbox subscriptions count Rank": number;
                        "Recent read count in the last month Rank": number;
                        "Mint count Rank": number;
                        "Claimed feeds count Rank": number;
                        "Claimed feeds subscriptions count Rank": number;
                        "Lists with more than 1 feed count Rank": number;
                        "Created lists subscriptions count Rank": number;
                        "Created lists income amount Rank": number;
                        "GitHub Community Contributions Rank": number;
                    } | null;
                    verify: string | null;
                } | null;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $put: {
            input: {
                json: {
                    verify: string | null;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/airdrop"> & hono_types.MergeSchemaPath<{
    "/tip": {
        $post: {
            input: {
                json: {
                    amount: string;
                    entryId: string;
                    TOTPCode?: string | undefined;
                };
            };
            output: {
                code: 0;
                data: {
                    transactionHash: string;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $get: {
            input: {
                query: {
                    type?: "tip" | "mint" | "burn" | "withdraw" | "purchase" | "airdrop" | undefined;
                    hash?: string | undefined;
                    fromUserId?: string | undefined;
                    toUserId?: string | undefined;
                    toFeedId?: string | undefined;
                    fromOrToUserId?: string | undefined;
                    createdAfter?: string | undefined;
                };
            };
            output: {
                code: 0;
                data: {
                    createdAt: string;
                    type: "tip" | "mint" | "burn" | "withdraw" | "purchase" | "airdrop";
                    hash: string;
                    powerToken: string;
                    fromUserId: string | null;
                    toUserId: string | null;
                    toFeedId: string | null;
                    toListId: string | null;
                    toEntryId: string | null;
                    toRSSHubId: string | null;
                    tax: string;
                    comment: string | null;
                    fromUser?: {
                        id: string;
                        name: string | null;
                        emailVerified: boolean | null;
                        image: string | null;
                        handle: string | null;
                        createdAt: string;
                        updatedAt: string;
                        twoFactorEnabled: boolean | null;
                        isAnonymous: boolean | null;
                        suspended: boolean | null;
                        bio: string | null;
                        website: string | null;
                        socialLinks: {
                            twitter: string;
                            github: string;
                            instagram: string;
                            facebook: string;
                            youtube: string;
                        } | null;
                    } | null | undefined;
                    toUser?: {
                        id: string;
                        name: string | null;
                        emailVerified: boolean | null;
                        image: string | null;
                        handle: string | null;
                        createdAt: string;
                        updatedAt: string;
                        twoFactorEnabled: boolean | null;
                        isAnonymous: boolean | null;
                        suspended: boolean | null;
                        bio: string | null;
                        website: string | null;
                        socialLinks: {
                            twitter: string;
                            github: string;
                            instagram: string;
                            facebook: string;
                            youtube: string;
                        } | null;
                    } | null | undefined;
                    toFeed?: {
                        id: string;
                        type: "feed";
                        url: string;
                        image?: string | null | undefined;
                        description?: string | null | undefined;
                        title?: string | null | undefined;
                        siteUrl?: string | null | undefined;
                        errorMessage?: string | null | undefined;
                        errorAt?: string | null | undefined;
                        ownerUserId?: string | null | undefined;
                        owner?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        } | null | undefined;
                        tipUsers?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        }[] | null | undefined;
                    } | null | undefined;
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/claim_daily": {
        $post: {
            input: {};
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/withdraw": {
        $post: {
            input: {
                json: {
                    amount: string;
                    address: string;
                    TOTPCode?: string | undefined;
                    toRss3?: boolean | undefined;
                };
            };
            output: {
                code: 0;
                data: {
                    transactionHash: string;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/claim-check": {
        $get: {
            input: {};
            output: {
                code: 0;
                data: boolean;
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/transactions"> & {
    "/": {
        $get: {
            input: {};
            output: {
                code: 0;
                data: {
                    createdAt: string;
                    userId: string;
                    powerToken: string;
                    addressIndex: number;
                    address: string | null;
                    dailyPowerToken: string;
                    cashablePowerToken: string;
                    level: {
                        rank: number | null;
                        level: number | null;
                        prevActivityPoints: number | null;
                        activityPoints: number | null;
                    } | null;
                    todayDailyPower: string;
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $post: {
            input: {};
            output: {
                code: 0;
                data: string;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/refresh": {
        $post: {
            input: {};
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/ranking": {
        $get: {
            input: {};
            output: {
                code: 0;
                data: {
                    user: {
                        id: string;
                        name: string | null;
                        emailVerified: boolean | null;
                        image: string | null;
                        handle: string | null;
                        createdAt: string;
                        updatedAt: string;
                        twoFactorEnabled: boolean | null;
                        isAnonymous: boolean | null;
                        suspended: boolean | null;
                        bio: string | null;
                        website: string | null;
                        socialLinks: {
                            twitter: string;
                            github: string;
                            instagram: string;
                            facebook: string;
                            youtube: string;
                        } | null;
                    };
                    userId: string;
                    rank: number | null;
                    powerToken: string;
                    address: string;
                    level: number | null;
                    prevActivityPoints: number | null;
                    activityPoints: number | null;
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/power-price": {
        $get: {
            input: {};
            output: {
                code: 0;
                data: {
                    rss3: number;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/wallets"> | hono_types.MergeSchemaPath<{
    "/": {
        $get: {
            input: {
                query: {
                    listId: string;
                    noExtras?: boolean | undefined;
                };
            };
            output: {
                code: 0;
                data: {
                    entries: {
                        id: string;
                        description: string | null;
                        title: string | null;
                        content: string | null;
                        author: string | null;
                        url: string | null;
                        feeds: {
                            id: string;
                            type: "feed";
                            url: string;
                            image?: string | null | undefined;
                            description?: string | null | undefined;
                            title?: string | null | undefined;
                            siteUrl?: string | null | undefined;
                            errorMessage?: string | null | undefined;
                            errorAt?: string | null | undefined;
                            ownerUserId?: string | null | undefined;
                            owner?: {
                                id: string;
                                name: string | null;
                                emailVerified: boolean | null;
                                image: string | null;
                                handle: string | null;
                                createdAt: string;
                                updatedAt: string;
                                suspended: boolean | null;
                            } | null | undefined;
                            tipUsers?: {
                                id: string;
                                name: string | null;
                                emailVerified: boolean | null;
                                image: string | null;
                                handle: string | null;
                                createdAt: string;
                                updatedAt: string;
                                suspended: boolean | null;
                            }[] | null | undefined;
                        };
                        language: string | null;
                        feedId: string;
                        guid: string;
                        categories: string[] | null;
                        authorUrl: string | null;
                        authorAvatar: string | null;
                        insertedAt: string;
                        publishedAt: string;
                        media?: {
                            type: "photo" | "video";
                            url: string;
                            width?: number | undefined;
                            height?: number | undefined;
                            preview_image_url?: string | undefined;
                            blurhash?: string | undefined;
                        }[] | null | undefined;
                        attachments?: {
                            url: string;
                            title?: string | undefined;
                            duration_in_seconds?: string | number | undefined;
                            mime_type?: string | undefined;
                            size_in_bytes?: number | undefined;
                        }[] | null | undefined;
                        extra?: {
                            links?: {
                                type: string;
                                url: string;
                                content_html?: string | undefined;
                            }[] | null | undefined;
                        } | null | undefined;
                    }[];
                    subscriptionCount: number;
                    list: {
                        id: string;
                        createdAt: string | null;
                        updatedAt: string | null;
                        type: "list";
                        view: number;
                        feedIds: string[];
                        fee: number;
                        image?: string | null | undefined;
                        description?: string | null | undefined;
                        title?: string | null | undefined;
                        feeds?: {
                            id: string;
                            type: "feed";
                            url: string;
                            image?: string | null | undefined;
                            description?: string | null | undefined;
                            title?: string | null | undefined;
                            siteUrl?: string | null | undefined;
                            errorMessage?: string | null | undefined;
                            errorAt?: string | null | undefined;
                            ownerUserId?: string | null | undefined;
                            owner?: {
                                id: string;
                                name: string | null;
                                emailVerified: boolean | null;
                                image: string | null;
                                handle: string | null;
                                createdAt: string;
                                updatedAt: string;
                                suspended: boolean | null;
                            } | null | undefined;
                            tipUsers?: {
                                id: string;
                                name: string | null;
                                emailVerified: boolean | null;
                                image: string | null;
                                handle: string | null;
                                createdAt: string;
                                updatedAt: string;
                                suspended: boolean | null;
                            }[] | null | undefined;
                        }[] | undefined;
                        ownerUserId?: string | null | undefined;
                        owner?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        } | null | undefined;
                    };
                    readCount: number;
                    feedCount: number;
                    analytics?: {
                        subscriptionCount: number | null;
                        listId: string;
                    } | undefined;
                    subscription?: {
                        createdAt: string;
                        userId: string;
                        title: string | null;
                        view: number;
                        isPrivate: boolean;
                        listId: string;
                    } | undefined;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $post: {
            input: {
                json: {
                    title: string;
                    view: number;
                    fee: number;
                    image?: string | null | undefined;
                    description?: string | null | undefined;
                };
            };
            output: {
                code: 0;
                data: {
                    id: string;
                    createdAt: string | null;
                    updatedAt: string | null;
                    type: "list";
                    view: number;
                    feedIds: string[];
                    fee: number;
                    image?: string | null | undefined;
                    description?: string | null | undefined;
                    title?: string | null | undefined;
                    feeds?: {
                        id: string;
                        type: "feed";
                        url: string;
                        image?: string | null | undefined;
                        description?: string | null | undefined;
                        title?: string | null | undefined;
                        siteUrl?: string | null | undefined;
                        errorMessage?: string | null | undefined;
                        errorAt?: string | null | undefined;
                        ownerUserId?: string | null | undefined;
                        owner?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        } | null | undefined;
                        tipUsers?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        }[] | null | undefined;
                    }[] | undefined;
                    ownerUserId?: string | null | undefined;
                    owner?: {
                        id: string;
                        name: string | null;
                        emailVerified: boolean | null;
                        image: string | null;
                        handle: string | null;
                        createdAt: string;
                        updatedAt: string;
                        suspended: boolean | null;
                    } | null | undefined;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $delete: {
            input: {
                json: {
                    listId: string;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $patch: {
            input: {
                json: {
                    title: string;
                    view: number;
                    fee: number;
                    listId: string;
                    image?: string | null | undefined;
                    description?: string | null | undefined;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/list": {
        $get: {
            input: {
                query: {
                    userId?: string | undefined;
                };
            };
            output: {
                code: 0;
                data: {
                    id: string;
                    createdAt: string | null;
                    updatedAt: string | null;
                    type: "list";
                    view: number;
                    feedIds: string[];
                    fee: number;
                    image?: string | null | undefined;
                    description?: string | null | undefined;
                    title?: string | null | undefined;
                    feeds?: {
                        id: string;
                        type: "feed";
                        url: string;
                        image?: string | null | undefined;
                        description?: string | null | undefined;
                        title?: string | null | undefined;
                        siteUrl?: string | null | undefined;
                        errorMessage?: string | null | undefined;
                        errorAt?: string | null | undefined;
                        ownerUserId?: string | null | undefined;
                        owner?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        } | null | undefined;
                        tipUsers?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        }[] | null | undefined;
                    }[] | undefined;
                    ownerUserId?: string | null | undefined;
                    subscriptionCount?: number | undefined;
                    owner?: {
                        id: string;
                        name: string | null;
                        emailVerified: boolean | null;
                        image: string | null;
                        handle: string | null;
                        createdAt: string;
                        updatedAt: string;
                        suspended: boolean | null;
                    } | null | undefined;
                    purchaseAmount?: number | undefined;
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/feeds": {
        $post: {
            input: {
                json: {
                    feedId: string;
                    listId: string;
                } | {
                    feedIds: string[];
                    listId: string;
                };
            };
            output: {
                code: 0;
                data: {
                    id: string;
                    type: "feed";
                    url: string;
                    image?: string | null | undefined;
                    description?: string | null | undefined;
                    title?: string | null | undefined;
                    siteUrl?: string | null | undefined;
                    errorMessage?: string | null | undefined;
                    errorAt?: string | null | undefined;
                    ownerUserId?: string | null | undefined;
                    owner?: {
                        id: string;
                        name: string | null;
                        emailVerified: boolean | null;
                        image: string | null;
                        handle: string | null;
                        createdAt: string;
                        updatedAt: string;
                        suspended: boolean | null;
                    } | null | undefined;
                    tipUsers?: {
                        id: string;
                        name: string | null;
                        emailVerified: boolean | null;
                        image: string | null;
                        handle: string | null;
                        createdAt: string;
                        updatedAt: string;
                        suspended: boolean | null;
                    }[] | null | undefined;
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/feeds": {
        $delete: {
            input: {
                json: {
                    feedId: string;
                    listId: string;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/lists"> | hono_types.MergeSchemaPath<{
    "/": {
        $get: {
            input: {};
            output: {};
            outputFormat: "text";
            status: 200;
        };
    };
} & {
    "/pools": {
        $get: {
            input: {};
            output: {
                code: 0;
                data: {
                    totalCount: number;
                    idleCount: number;
                    waitingCount: number;
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/metrics"> | hono_types.MergeSchemaPath<{
    "/clean": {
        $post: {
            input: {
                json: {
                    type: string;
                    nsfw?: boolean | undefined;
                    feedId?: string | undefined;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/mintdscsafr": {
        $post: {
            input: {
                json: {
                    userId: string;
                    amount: number;
                    key: string;
                    comment?: string | undefined;
                };
            };
            output: {
                code: 0;
                data: string;
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/admin"> | hono_types.MergeSchemaPath<{
    "/": {
        $delete: {
            input: {
                json: {
                    handle: string;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $get: {
            input: {
                query: {
                    handle: string;
                };
            };
            output: {
                code: 0;
                data: {
                    id: string;
                    type: "inbox";
                    secret: string;
                    image?: string | null | undefined;
                    description?: string | null | undefined;
                    title?: string | null | undefined;
                    ownerUserId?: string | null | undefined;
                    owner?: {
                        id: string;
                        name: string | null;
                        emailVerified: boolean | null;
                        image: string | null;
                        handle: string | null;
                        createdAt: string;
                        updatedAt: string;
                        suspended: boolean | null;
                    } | null | undefined;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $post: {
            input: {
                json: {
                    handle: string;
                    title?: string | undefined;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/webhook": {
        $post: {
            input: {
                json: {
                    guid: string;
                    publishedAt: string;
                    description?: string | null | undefined;
                    title?: string | null | undefined;
                    content?: string | null | undefined;
                    author?: string | null | undefined;
                    url?: string | null | undefined;
                    language?: string | null | undefined;
                    media?: {
                        type: "photo" | "video";
                        url: string;
                        width?: number | undefined;
                        height?: number | undefined;
                        preview_image_url?: string | undefined;
                        blurhash?: string | undefined;
                    }[] | null | undefined;
                    categories?: string[] | null | undefined;
                    attachments?: {
                        url: string;
                        title?: string | undefined;
                        duration_in_seconds?: string | number | undefined;
                        mime_type?: string | undefined;
                        size_in_bytes?: number | undefined;
                    }[] | null | undefined;
                    extra?: {
                        links?: {
                            type: string;
                            url: string;
                            content_html?: string | undefined;
                        }[] | null | undefined;
                    } | null | undefined;
                    authorUrl?: string | null | undefined;
                    authorAvatar?: string | null | undefined;
                    read?: boolean | null | undefined;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/email": {
        $post: {
            input: {
                json: {
                    date: string;
                    from: {
                        name?: string | undefined;
                        address?: string | undefined;
                    };
                    to: {
                        address: string;
                    };
                    messageId: string;
                    subject?: string | undefined;
                    html?: string | undefined;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $put: {
            input: {
                json: {
                    handle: string;
                    title: string;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/list": {
        $get: {
            input: {};
            output: {
                code: 0;
                data: {
                    id: string;
                    type: "inbox";
                    secret: string;
                    image?: string | null | undefined;
                    description?: string | null | undefined;
                    title?: string | null | undefined;
                    ownerUserId?: string | null | undefined;
                    owner?: {
                        id: string;
                        name: string | null;
                        emailVerified: boolean | null;
                        image: string | null;
                        handle: string | null;
                        createdAt: string;
                        updatedAt: string;
                        suspended: boolean | null;
                    } | null | undefined;
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/inboxes"> | hono_types.MergeSchemaPath<{
    "/": {
        $post: {
            input: {
                json: {
                    token: string;
                    channel: "macos" | "windows" | "linux" | "ios" | "android" | "web" | "desktop";
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/test": {
        $get: {
            input: {
                query: {
                    channel?: string | undefined;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $delete: {
            input: {
                json: {
                    channel: "macos" | "windows" | "linux" | "ios" | "android" | "web" | "desktop";
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $get: {
            input: {};
            output: {
                code: 0;
                data: {
                    userId: string | null;
                    token: string;
                    channel: "macos" | "windows" | "linux" | "ios" | "android" | "web" | "desktop";
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/messaging"> | hono_types.MergeSchemaPath<{
    "/configs": {
        $get: {
            input: {};
            output: {
                code: 0;
                data: {
                    MAX_SUBSCRIPTIONS: number;
                    MAX_LISTS: number;
                    MAX_ACTIONS: number;
                    MAX_WEBHOOKS_PER_ACTION: number;
                    MAX_INBOXES: number;
                    IMPORTING_TITLE: string;
                    DAILY_POWER_PERCENTAGES: number[];
                    LEVEL_PERCENTAGES: number[];
                    DAILY_CLAIM_AMOUNT: {
                        trial: number;
                        normal: number;
                    };
                    TAX_POINT: string;
                    INVITATION_INTERVAL_DAYS: number;
                    INVITATION_PRICE: number;
                    INVITATION_ENABLED: boolean;
                    DAILY_POWER_SUPPLY: number;
                    IS_RSS3_TESTNET: boolean;
                    PRODUCT_HUNT_VOTE_URL: string;
                    ANNOUNCEMENT: string;
                    MAX_TRIAL_USER_FEED_SUBSCRIPTION: number;
                    MAX_TRIAL_USER_LIST_SUBSCRIPTION: number;
                    MAS_IN_REVIEW_VERSION?: string | undefined;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/status"> | hono_types.MergeSchemaPath<{
    "/": {
        $get: {
            input: {
                query: {
                    feedId: string;
                };
            };
            output: {
                code: 0;
                data: {
                    level: number;
                    monthlyBoostCost: number;
                    boostCount: number;
                    remainingBoostsToLevelUp: number;
                    lastValidBoost: {
                        hash: string | null;
                        expiresAt: string;
                    } | null;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/boosters": {
        $get: {
            input: {
                query: {
                    feedId: string;
                };
            };
            output: {
                code: 0;
                data: {
                    id: string;
                    name: string | null;
                    emailVerified: boolean | null;
                    image: string | null;
                    handle: string | null;
                    createdAt: string;
                    updatedAt: string;
                    twoFactorEnabled: boolean | null;
                    isAnonymous: boolean | null;
                    suspended: boolean | null;
                    bio: string | null;
                    website: string | null;
                    socialLinks: {
                        twitter: string;
                        github: string;
                        instagram: string;
                        facebook: string;
                        youtube: string;
                    } | null;
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $post: {
            input: {
                json: {
                    amount: string;
                    feedId: string;
                    TOTPCode?: string | undefined;
                };
            };
            output: {
                code: 0;
                data: {
                    expiresAt: string;
                    transactionHash: string;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "boosts"> | hono_types.MergeSchemaPath<{
    "/postgresql": {
        $get: {
            input: {};
            output: {
                code: 0;
                data: number;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/redis": {
        $get: {
            input: {};
            output: {
                code: 0;
                data: number;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/bullmq": {
        $get: {
            input: {
                query: {
                    name: "follow-queue" | "admin-wallet-queue";
                };
            };
            output: {
                code: 0;
                data: {
                    current: {
                        completed: number;
                        wait: number;
                        failed: number;
                    };
                    metrics: {
                        completed: {
                            data: number[];
                            count: number;
                        };
                        failed: {
                            data: number[];
                            count: number;
                        };
                    };
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/rsshub": {
        $get: {
            input: {
                query: {
                    route?: string | undefined;
                    namespace?: string | undefined;
                };
            };
            output: {
                code: 0;
                data: {
                    successCount: number;
                    errorCount: number;
                    timestamp: string;
                    successRate: number;
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/probes"> | hono_types.MergeSchemaPath<{
    "/": {
        $post: {
            input: {
                json: {
                    baseUrl: string;
                    id?: string | undefined;
                    accessKey?: string | undefined;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/list": {
        $get: {
            input: {};
            output: {
                code: 0;
                data: {
                    id: string;
                    description: string | null;
                    errorMessage: string | null;
                    errorAt: string | null;
                    ownerUserId: string;
                    owner: {
                        id: string;
                        name: string | null;
                        image: string | null;
                        handle: string | null;
                    } | null;
                    price: number;
                    userLimit: number | null;
                    userCount: number;
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $delete: {
            input: {
                json: {
                    id: string;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/use": {
        $post: {
            input: {
                json: {
                    id: string | null;
                    TOTPCode?: string | undefined;
                    durationInMonths?: number | undefined;
                };
            };
            output: {
                code: 0;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $get: {
            input: {
                query: {
                    id: string;
                };
            };
            output: {
                code: 0;
                data: {
                    purchase: {
                        hash: string | null;
                        expiresAt: string;
                    } | null;
                    instance: {
                        id: string;
                        description: string | null;
                        errorMessage: string | null;
                        errorAt: string | null;
                        ownerUserId: string;
                        price: number;
                        userLimit: number | null;
                        baseUrl?: string | null | undefined;
                        accessKey?: string | null | undefined;
                    };
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/status": {
        $get: {
            input: {};
            output: {
                code: 0;
                data: {
                    purchase: {
                        hash: string | null;
                        expiresAt: string;
                    } | null;
                    usage?: {
                        id: string;
                        userId: string;
                        rsshubId: string;
                    } | undefined;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/rsshub"> | hono_types.MergeSchemaPath<{
    "/avatar": {
        $post: {
            input: {};
            output: {
                code: 0;
                url: string;
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/upload"> | hono_types.MergeSchemaPath<{
    "/feeds": {
        $get: {
            input: {
                query: {
                    view?: number | undefined;
                    language?: "eng" | "cmn" | undefined;
                    limit?: number | undefined;
                    range?: "1d" | "3d" | "7d" | "30d" | undefined;
                };
            };
            output: {
                code: 0;
                data: {
                    view: number | null;
                    feedId: string;
                    feed: {
                        id: string;
                        type: "feed";
                        url: string;
                        image?: string | null | undefined;
                        description?: string | null | undefined;
                        title?: string | null | undefined;
                        siteUrl?: string | null | undefined;
                        errorMessage?: string | null | undefined;
                        errorAt?: string | null | undefined;
                        ownerUserId?: string | null | undefined;
                        owner?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        } | null | undefined;
                        tipUsers?: {
                            id: string;
                            name: string | null;
                            emailVerified: boolean | null;
                            image: string | null;
                            handle: string | null;
                            createdAt: string;
                            updatedAt: string;
                            suspended: boolean | null;
                        }[] | null | undefined;
                    };
                    analytics: {
                        view: number | null;
                        feedId: string;
                        updatesPerWeek: number | null;
                        subscriptionCount: number | null;
                        latestEntryPublishedAt: string | null;
                    };
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/trending">, "/">;
type AppType = typeof _routes;

export { type ActionItem, type ActionsModel, type AirdropActivity, type AppType, type AttachmentsModel, type AuthSession, type AuthUser, CommonEntryFields, type ConditionItem, type DetailModel, type EntriesModel, type ExtraModel, type FeedModel, type ListModel, type MediaModel, type MessagingData, MessagingType, type SettingsModel, type UrlReadsModel, account, achievements, achievementsOpenAPISchema, actions, actionsItemOpenAPISchema, actionsOpenAPISchema, actionsRelations, activityEnum, airdrops, airdropsOpenAPISchema, attachmentsZodSchema, authPlugins, boosts, captcha, collections, collectionsOpenAPISchema, collectionsRelations, detailModelSchema, entries, entriesOpenAPISchema, entriesRelations, extraZodSchema, feedAnalytics, feedAnalyticsOpenAPISchema, feedAnalyticsRelations, feedPowerTokens, feedPowerTokensOpenAPISchema, feedPowerTokensRelations, feeds, feedsOpenAPISchema, feedsRelations, inboxHandleSchema, inboxes, inboxesEntries, inboxesEntriesInsertOpenAPISchema, type inboxesEntriesModel, inboxesEntriesOpenAPISchema, inboxesEntriesRelations, inboxesOpenAPISchema, inboxesRelations, invitations, invitationsOpenAPISchema, invitationsRelations, languageSchema, levels, levelsOpenAPISchema, levelsRelations, listAnalytics, listAnalyticsOpenAPISchema, listAnalyticsRelations, lists, listsOpenAPISchema, listsRelations, listsSubscriptions, listsSubscriptionsOpenAPISchema, listsSubscriptionsRelations, lower, mediaZodSchema, messaging, messagingOpenAPISchema, messagingRelations, readabilities, rsshub, rsshubAnalytics, rsshubAnalyticsOpenAPISchema, rsshubOpenAPISchema, rsshubPurchase, rsshubUsage, rsshubUsageOpenAPISchema, rsshubUsageRelations, session, settings, subscriptions, subscriptionsOpenAPISchema, subscriptionsRelations, timeline, timelineOpenAPISchema, timelineRelations, transactionType, transactions, transactionsOpenAPISchema, transactionsRelations, trendingFeeds, trendingFeedsOpenAPISchema, trendingFeedsRelations, twoFactor, uploads, urlReads, urlReadsOpenAPISchema, user, users, usersOpenApiSchema, usersRelations, verification, wallets, walletsOpenAPISchema, walletsRelations };
