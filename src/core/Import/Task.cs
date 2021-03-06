﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Dime.Scheduler.Sdk.Import
{
    public class Task : IImportRequestable, IValidatableImportRequest<Task>
    {
        [Required]
        [MaxLength(30)]
        [ImportParameter(nameof(SourceApp), TransactionType.Append, TransactionType.Delete)]
        public string SourceApp { get; set; }

        [Required]
        [MaxLength(10)]
        [ImportParameter(nameof(SourceType), TransactionType.Append, TransactionType.Delete)]
        public string SourceType { get; set; }

        [Required]
        [MaxLength(50)]
        [ImportParameter(nameof(JobNo), TransactionType.Append, TransactionType.Delete)]
        public string JobNo { get; set; }

        [Required]
        [MaxLength(50)]
        [ImportParameter(nameof(TaskNo), TransactionType.Append)]
        public string TaskNo { get; set; }

        [ImportParameter(nameof(TaskType), TransactionType.Append)]
        public TaskType TaskType { get; set; }

        [MaxLength(50)]
        [ImportParameter(nameof(ShortDescription), TransactionType.Append)]
        public string ShortDescription { get; set; }

        [ImportParameter(nameof(Description), TransactionType.Append)]
        [MaxLength(50)]
        public string Description { get; set; }

        [MaxLength(255)]
        [ImportParameter(nameof(Name), TransactionType.Append)]
        public string Name { get; set; }

        [MaxLength(20)]
        [ImportParameter(nameof(Type), TransactionType.Append)]
        public string Type { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(Category), TransactionType.Append)]
        public string Category { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(TimeMarker), TransactionType.Append)]
        public string TimeMarker { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(Pin), TransactionType.Append)]
        public string Pin { get; set; }

        [MaxLength(50)]
        [ImportParameter(nameof(ServiceNo), TransactionType.Append)]
        public string ServiceNo { get; set; }

        [MaxLength(20)]
        [ImportParameter(nameof(ServiceGroup), TransactionType.Append)]
        public string ServiceGroup { get; set; }

        [MaxLength(20)]
        [ImportParameter(nameof(ServiceClass), TransactionType.Append)]
        public string ServiceClass { get; set; }

        [MaxLength(50)]
        [ImportParameter(nameof(ServiceSerialNo), TransactionType.Append)]
        public string ServiceSerialNo { get; set; }

        [MaxLength(50)]
        [ImportParameter(nameof(ServiceName), TransactionType.Append)]
        public string ServiceName { get; set; }

        [MaxLength(10)]
        [ImportParameter("IRISFault", TransactionType.Append)]
        public string IrisFault { get; set; }

        [MaxLength(10)]
        [ImportParameter("IRISSymptom", TransactionType.Append)]
        public string IrisSymptom { get; set; }

        [MaxLength(10)]
        [ImportParameter("IRISArea", TransactionType.Append)]
        public string IrisArea { get; set; }

        [MaxLength(10)]
        [ImportParameter("IRISReason", TransactionType.Append)]
        public string IrisReason { get; set; }

        [MaxLength(10)]
        [ImportParameter("IRISResolution", TransactionType.Append)]
        public string IrisResolution { get; set; }

        [MaxLength(10)]
        [ImportParameter(nameof(Skill1), TransactionType.Append)]
        public string Skill1 { get; set; }

        [MaxLength(10)]
        [ImportParameter(nameof(Skill2), TransactionType.Append)]
        public string Skill2 { get; set; }

        [MaxLength(10)]
        [ImportParameter(nameof(Skill3), TransactionType.Append)]
        public string Skill3 { get; set; }

        [MaxLength(20)]
        [ImportParameter(nameof(ContractNo), TransactionType.Append)]
        public string ContractNo { get; set; }

        [MaxLength(30)]
        [ImportParameter(nameof(ContractType), TransactionType.Append)]
        public string ContractType { get; set; }

        [ImportParameter(nameof(ContractDescription), TransactionType.Append)]
        public string ContractDescription { get; set; }

        [ImportParameter(nameof(ContractStartDate), TransactionType.Append)]
        public DateTime? ContractStartDate { get; set; }

        [ImportParameter(nameof(ContractEndDate), TransactionType.Append)]
        public DateTime? ContractEndDate { get; set; }

        [ImportParameter(nameof(PartsWarrantyStartDate), TransactionType.Append)]
        public DateTime? PartsWarrantyStartDate { get; set; }

        [ImportParameter(nameof(PartsWarrantyEndDate), TransactionType.Append)]
        public DateTime? PartsWarrantyEndDate { get; set; }

        [ImportParameter(nameof(LaborWarrantyStartDate), TransactionType.Append)]
        public DateTime? LaborWarrantyStartDate { get; set; }

        [ImportParameter(nameof(LaborWarrantyEndDate), TransactionType.Append)]
        public DateTime? LaborWarrantyEndDate { get; set; }

        [ImportParameter(nameof(Importance), TransactionType.Append)]
        public Importance Importance { get; set; }

        [MaxLength(20)]
        [ImportParameter(nameof(Status), TransactionType.Append)]
        public string Status { get; set; }

        [ImportParameter(nameof(ExpectedResponseDateTime), TransactionType.Append)]
        public DateTime? ExpectedResponseDateTime { get; set; }

        [ImportParameter(nameof(ActualResponseDateTime), TransactionType.Append)]
        public DateTime? ActualResponseDateTime { get; set; }

        [ImportParameter(nameof(RequestedStartDate), TransactionType.Append)]
        public DateTime? RequestedStartDate { get; set; }

        [ImportParameter(nameof(RequestedEndDate), TransactionType.Append)]
        public DateTime? RequestedEndDate { get; set; }

        [ImportParameter(nameof(RequestedStartTime), TransactionType.Append)]
        public TimeSpan? RequestedStartTime { get; set; }

        [ImportParameter(nameof(RequestedEndTime), TransactionType.Append)]
        public TimeSpan? RequestedEndTime { get; set; }

        [ImportParameter(nameof(ConfirmedStartDate), TransactionType.Append)]
        public DateTime? ConfirmedStartDate { get; set; }

        [ImportParameter(nameof(ConfirmedEndDate), TransactionType.Append)]
        public DateTime? ConfirmedEndDate { get; set; }

        [ImportParameter(nameof(ActualStartDate), TransactionType.Append)]
        public DateTime? ActualStartDate { get; set; }

        [ImportParameter(nameof(ActualEndDate), TransactionType.Append)]
        public DateTime? ActualEndDate { get; set; }

        [ImportParameter(nameof(LocationDescription), TransactionType.Append)]
        public string LocationDescription { get; set; }

        [ImportParameter(nameof(Duration), TransactionType.Append)]
        public TimeSpan? Duration { get; set; }

        [ImportParameter(nameof(DurationInSeconds), TransactionType.Append)]
        public long DurationInSeconds { get; set; }

        [ImportParameter(nameof(Subject), TransactionType.Append)]
        public string Subject { get; set; }

        [ImportParameter(nameof(Body), TransactionType.Append)]
        public string Body { get; set; }

        [ImportParameter(nameof(InfiniteTask), TransactionType.Append)]
        public bool InfiniteTask { get; set; }

        [ImportParameter(nameof(TaskOpenAsOf), TransactionType.Append)]
        public DateTime? TaskOpenAsOf { get; set; }

        [ImportParameter(nameof(TaskOpenTill), TransactionType.Append)]
        public DateTime? TaskOpenTill { get; set; }

        [ImportParameter(nameof(RequiredTotalDuration), TransactionType.Append)]
        public TimeSpan? RequiredTotalDuration { get; set; }

        [ImportParameter(nameof(RequiredNoResources), TransactionType.Append)]
        public int RequiredNoResources { get; set; }

        [ImportParameter(nameof(AppointmentEarliestAllowed), TransactionType.Append)]
        public DateTime? AppointmentEarliestAllowed { get; set; }

        [ImportParameter(nameof(AppointmentLatestAllowed), TransactionType.Append)]
        public DateTime? AppointmentLatestAllowed { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(FreeText1), TransactionType.Append)]
        public string FreeText1 { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(FreeText2), TransactionType.Append)]
        public string FreeText2 { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(FreeText3), TransactionType.Append)]
        public string FreeText3 { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(FreeText4), TransactionType.Append)]
        public string FreeText4 { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(FreeText5), TransactionType.Append)]
        public string FreeText5 { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(FreeText6), TransactionType.Append)]
        public string FreeText6 { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(FreeText7), TransactionType.Append)]
        public string FreeText7 { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(FreeText8), TransactionType.Append)]
        public string FreeText8 { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(FreeText9), TransactionType.Append)]
        public string FreeText9 { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(FreeText10), TransactionType.Append)]
        public string FreeText10 { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(FreeText11), TransactionType.Append)]
        public string FreeText11 { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(FreeText12), TransactionType.Append)]
        public string FreeText12 { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(FreeText13), TransactionType.Append)]
        public string FreeText13 { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(FreeText14), TransactionType.Append)]
        public string FreeText14 { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(FreeText15), TransactionType.Append)]
        public string FreeText15 { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(FreeText16), TransactionType.Append)]
        public string FreeText16 { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(FreeText17), TransactionType.Append)]
        public string FreeText17 { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(FreeText18), TransactionType.Append)]
        public string FreeText18 { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(FreeText19), TransactionType.Append)]
        public string FreeText19 { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(FreeText20), TransactionType.Append)]
        public string FreeText20 { get; set; }

        [ImportParameter(nameof(FreeDecimal1), TransactionType.Append)]
        public decimal FreeDecimal1 { get; set; }

        [ImportParameter(nameof(FreeDecimal2), TransactionType.Append)]
        public decimal FreeDecimal2 { get; set; }

        [ImportParameter(nameof(FreeDecimal3), TransactionType.Append)]
        public decimal FreeDecimal3 { get; set; }

        [ImportParameter(nameof(FreeDecimal4), TransactionType.Append)]
        public decimal FreeDecimal4 { get; set; }

        [ImportParameter(nameof(FreeDecimal5), TransactionType.Append)]
        public decimal FreeDecimal5 { get; set; }

        [ImportParameter(nameof(FreeDate1), TransactionType.Append)]
        public DateTime? FreeDate1 { get; set; }

        [ImportParameter(nameof(FreeDate2), TransactionType.Append)]
        public DateTime? FreeDate2 { get; set; }

        [ImportParameter(nameof(FreeDate3), TransactionType.Append)]
        public DateTime? FreeDate3 { get; set; }

        [ImportParameter(nameof(FreeDate4), TransactionType.Append)]
        public DateTime? FreeDate4 { get; set; }

        [ImportParameter(nameof(FreeDate5), TransactionType.Append)]
        public DateTime? FreeDate5 { get; set; }

        [ImportParameter(nameof(FreeBit1), TransactionType.Append)]
        public bool FreeBit1 { get; set; }

        [ImportParameter(nameof(FreeBit2), TransactionType.Append)]
        public bool FreeBit2 { get; set; }

        [ImportParameter(nameof(FreeBit3), TransactionType.Append)]
        public bool FreeBit3 { get; set; }

        [ImportParameter(nameof(FreeBit4), TransactionType.Append)]
        public bool FreeBit4 { get; set; }

        [ImportParameter(nameof(FreeBit5), TransactionType.Append)]
        public bool FreeBit5 { get; set; }

        [MaxLength(1000)]
        [ImportParameter("url1", TransactionType.Append)]
        public string Url1 { get; set; }

        [MaxLength(255)]
        [ImportParameter("urldesc1", TransactionType.Append)]
        public string UrlDescription1 { get; set; }

        [MaxLength(1000)]
        [ImportParameter("url2", TransactionType.Append)]
        public string Url2 { get; set; }

        [MaxLength(255)]
        [ImportParameter("urldesc2", TransactionType.Append)]
        public string UrlDescription2 { get; set; }

        [MaxLength(1000)]
        [ImportParameter("url3", TransactionType.Append)]
        public string Url3 { get; set; }

        [MaxLength(255)]
        [ImportParameter("urldesc3", TransactionType.Append)]
        public string UrlDescription3 { get; set; }

        [ImportParameter(nameof(CertificateNo), TransactionType.Append)]
        public string CertificateNo { get; set; }

        [ImportParameter(nameof(RequiredTotalDurationInSeconds), TransactionType.Append)]
        public long RequiredTotalDurationInSeconds { get; set; }

        [ImportParameter(nameof(DoNotCountAppointmentResource), TransactionType.Append)]
        public bool DoNotCountAppointmentResource { get; set; }

        [ImportParameter(nameof(IsComplete), TransactionType.Append)]
        public bool IsComplete { get; set; }

        [MaxLength(20)]
        [ImportParameter(nameof(PlanningUOM), TransactionType.Append)]
        public string PlanningUOM { get; set; }

        [ImportParameter(nameof(PlanningUOMConversion), TransactionType.Append)]
        public decimal PlanningUOMConversion { get; set; }

        [ImportParameter(nameof(PlanningQty), TransactionType.Append)]
        public decimal PlanningQty { get; set; }

        [ImportParameter(nameof(UseFixPlanningQty), TransactionType.Append)]
        public bool UseFixPlanningQty { get; set; }

        [ImportParameter(nameof(RoundToUOM), TransactionType.Append)]
        public bool RoundToUOM { get; set; }

        [MaxLength(100)]
        [ImportParameter(nameof(AppointmentTemplate), TransactionType.Append)]
        public string AppointmentTemplate { get; set; }

        [ImportParameter(nameof(BulkPlanningQty), TransactionType.Append)]
        public decimal BulkPlanningQty { get; set; }

        [ImportParameter(nameof(StartDate), TransactionType.Append)]
        public DateTime? StartDate { get; set; }

        [ImportParameter(nameof(EndDate), TransactionType.Append)]
        public DateTime? EndDate { get; set; }

        [ImportParameter(nameof(PercentDone), TransactionType.Append)]
        public int PercentDone { get; set; }

        [ImportParameter(nameof(SchedulingMode), TransactionType.Append)]
        public SchedulingMode SchedulingMode { get; set; }

        [ImportParameter(nameof(BaseLineStartDate), TransactionType.Append)]
        public DateTime? BaseLineStartDate { get; set; }

        [ImportParameter(nameof(BaseLineEndDate), TransactionType.Append)]
        public DateTime? BaseLineEndDate { get; set; }

        [ImportParameter(nameof(BaseLinePercentDone), TransactionType.Append)]
        public int BaseLinePercentDone { get; set; }

        [ImportParameter(nameof(DeadLine), TransactionType.Append)]
        public DateTime? DeadLine { get; set; }

        [ImportParameter(nameof(Index), TransactionType.Append)]
        public int Index { get; set; }

        [ImportParameter(nameof(ConstraintType), TransactionType.Append)]
        public int ConstraintType { get; set; }

        [ImportParameter(nameof(ConstraintDatetime), TransactionType.Append)]
        public DateTime? ConstraintDatetime { get; set; }

        [MaxLength(50)]
        [ImportParameter(nameof(ParentTaskNo), TransactionType.Append)]
        public string ParentTaskNo { get; set; }

        [MaxLength(255)]
        [ImportParameter(nameof(CalendarCode), TransactionType.Append)]
        public string CalendarCode { get; set; }

        [MaxLength(50)]
        [ImportParameter(nameof(PredecessorTaskNo), TransactionType.Append)]
        public string PredecessorTaskNo { get; set; }

        [ImportParameter(nameof(PredecessorLag), TransactionType.Append)]
        public int PredecessorLag { get; set; }

        [ImportParameter(nameof(ManuallyScheduled), TransactionType.Append)]
        public bool ManuallyScheduled { get; set; }

        [ImportParameter(nameof(Note), TransactionType.Append)]
        public string Note { get; set; }

        [ImportParameter(nameof(OverRuleGanttPlanning), TransactionType.Append)]
        public bool OverRuleGanttPlanning { get; set; }

        [ImportParameter(nameof(IgnoreCalendars), TransactionType.Append)]
        public bool IgnoreCalendars { get; set; }

        [MaxLength(255)]
        [ImportParameter(nameof(ContainerName), TransactionType.Append)]
        public string ContainerName { get; set; }

        [ImportParameter(nameof(ContainerIndex), TransactionType.Append)]
        public int ContainerIndex { get; set; }

        [ImportParameter(nameof(CheckAppointments), TransactionType.Delete)]
        public bool CheckAppointments { get; set; }

        [ImportParameter("SentFromBackoffice", TransactionType.Delete)]
        public bool SentFromBackOffice { get; set; }

        ImportRequest IImportRequestable.ToImportRequest(TransactionType transactionType)
            => transactionType switch
            {
                TransactionType.Append => ((IValidatableImportRequest<Task>)this).Validate(transactionType).CreateAppendRequest(),
                TransactionType.Delete => ((IValidatableImportRequest<Task>)this).Validate(transactionType).CreateDeleteRequest(),
                _ => throw new ArgumentOutOfRangeException(nameof(transactionType), transactionType, null)
            };

        private ImportRequest CreateAppendRequest()
            => new(ImportProcedures.Task.Append, this.CreateParameters(TransactionType.Append));

        private ImportRequest CreateDeleteRequest()
            => new(ImportProcedures.Task.Delete, this.CreateParameters(TransactionType.Delete));

        Task IValidatableImportRequest<Task>.Validate(TransactionType transactionType)
            => this.Validate(transactionType);

        IEnumerable<ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
            => this.Validate<Task>(validationContext);
    }
}