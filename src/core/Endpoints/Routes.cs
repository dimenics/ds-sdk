﻿using System.Diagnostics.CodeAnalysis;

namespace Dime.Scheduler.Sdk
{
    [ExcludeFromCodeCoverage]
    internal static class Routes
    {
        private static readonly string _api = "api";

        internal static class Categories
        {
            private static readonly string _endpoint = "Categories";

            internal static readonly string Create = $"{_api}/{_endpoint}/Create";
            internal static readonly string Update = $"{_api}/{_endpoint}/Update";
            internal static readonly string Delete = $"{_api}/{_endpoint}/Delete";
        }

        internal static class Resources
        {
            private static readonly string _endpoint = "Resources";

            internal static readonly string Get = $"{_api}/{_endpoint}/Get";
        }

        internal static class Import
        {
            private static readonly string _endpoint = "Import";

            internal static readonly string Insert = $"{_api}/{_endpoint}/Insert";
            internal static readonly string InsertData = $"{_api}/{_endpoint}/InsertData";
        }

        internal static class Messages
        {
            private static readonly string _endpoint = "Messages";

            internal static readonly string Post = $"{_api}/{_endpoint}/Create";
        }
    }
}