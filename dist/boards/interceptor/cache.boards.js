"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let CacheInterceptor = exports.CacheInterceptor = class CacheInterceptor {
    constructor() {
        this.cache = new Map();
    }
    intercept(context, next) {
        const key = context.getHandler().name;
        const cacheValue = this.cache.get(key);
        const now = Date.now();
        if (cacheValue) {
            if (Date.now() < cacheValue.expirationTime) {
                console.log('in?');
                console.log(this.cache.get(key));
                console.log(`Execution time: ${Date.now() - now}ms`);
                return (0, rxjs_1.of)(cacheValue.data);
            }
            this.cache.delete(key);
        }
        return next.handle().pipe((0, operators_1.tap)((data) => {
            const expirationTime = Date.now() + 1000 * 60 * 5;
            this.cache.set(key, { data, expirationTime });
            console.log(`Execution time: ${Date.now() - now}ms`);
        }));
    }
};
exports.CacheInterceptor = CacheInterceptor = __decorate([
    (0, common_1.Injectable)()
], CacheInterceptor);
//# sourceMappingURL=cache.boards.js.map