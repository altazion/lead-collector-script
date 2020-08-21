export module Altazion.Leads {
    export class Collector {
        private static _token : string;
        private static _rootUrl : string;
        public static init(token : string, rootUrl : string=null){
            Collector._token = token;
            if(rootUrl!=null) {
                Collector._rootUrl = rootUrl;
            }
            else {
                Collector._rootUrl = "https://api.altazion.com/";
            }
        }
    }
}