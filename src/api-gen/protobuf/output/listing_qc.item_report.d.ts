declare namespace item_report {
	
	interface Constant {
	}
	namespace Constant {
		// 102900000 - 103000000
		enum ErrorCode {
			ERROR_DATABASE = 102900000, // DB query return error and this error is not "not found"
			ERROR_INTERNAL = 102900001, 
			ERROR_PARAM = 102900002, 
			ERROR_NOT_IMPLEMENTED = 102900003, 
			ERROR_REQUEST_ASSERTION = 102900004, 
			ERROR_RESPONSE_ASSERTION = 102900005, 
			ERROR_DEPRECATED = 102900006, 
		}
		
		enum ReportReasonStatus {
			REPORT_REASON_DELETE = 0, 
			REPORT_REASON_NORMAL = 1, 
		}
		
		enum ReportReasonType {
			REPORT_REASON_NEW = 0, // New reasons created after the revamp
			REPORT_REASON_OLD = 1, // Old reasons created before the revamp
		}
	}
	
	interface ReportReason {
		id?: string; 
		name?: string; // 1 - 100 length
		region?: string; 
		explanation?: string; // 0 - 200 length
		isVisible?: boolean; // If true, will be visible in item report page; max 20 reasons with is_visible == true
		isDescriptionMandatory?: boolean; 
		descriptionLengthMin?: number; // Range 0 - 500; description_length_min < description_length_max
		descriptionLengthMax?: number; // Range 0 - 500; description_length_min < description_length_max
		sorting?: number; // Stores the unique position of the reason in an order configured by operators. Starts from 1 for first reason
		status?: number; // See enum ReportReasonStatus
		operator?: string; // email of last operator
		updateTime?: string; 
		createTime?: string; 
	}
	
	interface AuditParam {
		operator?: string; // email of operator
	}
	
	interface ListReportReasonsRequest {
		region?: string; // required
		reasonIds?: string[]; // optional
		isVisible?: boolean; // optional
		isDescriptionMandatory?: boolean; // optional
		statusList?: number[]; // optional; See enum ReportReasonStatus; defaults to all statuses if not set
		reasonType?: number; // optional; See enum ReportReasonType; defaults to REPORT_REASON_NEW(0) if not set
	}
	
	interface ListReportReasonsResponse {
		debugMsg?: string; 
		reportReasons?: ReportReason[]; // sorted by the order configured by the operators
		versionToken?: string; // concurrency control token
	}
	// Called by Listing QC Portal - Report Management Page
	interface AddReportReasonRequest {
		auditParam?: AuditParam; // Required
		reportReason?: ReportReason; // Required
		versionToken?: string; // Required; Needs to match the saved version_token
	}
	
	interface AddReportReasonResponse {
		debugMsg?: string; 
	}
	// Called by Listing QC Portal - Report Management Page
	interface BatchUpdateReportReasonsRequest {
		auditParam?: AuditParam; // Required
		reportReasons?: ReportReason[]; // Required
		versionToken?: string; // needs to match the saved version_token
	}
	
	interface BatchUpdateReportReasonsResponse {
		debugMsg?: string; 
	}
	// Called by Listing QC Portal - Report Management Page
	interface DeleteReportReasonRequest {
		auditParam?: AuditParam; 
		reportReasonId?: string; 
		region?: string; 
		versionToken?: string; // needs to match the saved version_token
	}
	
	interface DeleteReportReasonResponse {
		debugMsg?: string; 
	}
	// Called by Item Report BFF
	interface ReportItemRequest {
		itemId?: string; // required
		shopId?: string; // required
		region?: string; // required
		reporterId?: string; // required
		reasonId?: string; // required
		description?: string; // optional
	}
	
	interface ReportItemResponse {
		debugMsg?: string; 
	}
}
