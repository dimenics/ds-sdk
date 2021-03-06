﻿using System;

namespace Dime.Scheduler.Sdk.Import
{
    public class ResourceCalendar : IImportRequestable
    {
        [ImportParameter("ResourceCalendarCode", TransactionType.Append, TransactionType.Delete)]
        public string Code { get; set; }

        [ImportParameter(nameof(ResourceNo), TransactionType.Append)]
        public string ResourceNo { get; set; }

        [ImportParameter(nameof(CalendarCode), TransactionType.Append)]
        public string CalendarCode { get; set; }

        [ImportParameter(nameof(StartDate), TransactionType.Append)]
        public DateTime StartDate { get; set; }

        [ImportParameter(nameof(EndDate), TransactionType.Append)]
        public DateTime EndDate { get; set; }

        ImportRequest IImportRequestable.ToImportRequest(TransactionType transactionType)
            => transactionType switch
            {
                TransactionType.Append => CreateAppendRequest(),
                TransactionType.Delete => CreateDeleteRequest(),
                _ => throw new ArgumentOutOfRangeException(nameof(transactionType), transactionType, null)
            };

        private ImportRequest CreateAppendRequest()
            => new(ImportProcedures.Resource.Calendar.Append, this.CreateParameters(TransactionType.Append));

        private ImportRequest CreateDeleteRequest()
            => new(ImportProcedures.Resource.Calendar.Delete, this.CreateParameters(TransactionType.Delete));
    }
}