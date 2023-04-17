declare namespace item_report {
	
	interface Constant {
	}
	namespace Constant {
		
		enum ErrorCode {
			ERROR_DATABASE = 102900000, 
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
			REPORT_REASON_NEW = 0, 
			REPORT_REASON_OLD = 1, 
		}
	}
	
	interface ReportReason {
		id?: string; 
		name?: string; 
		region?: string; 
		explanation?: string; 
		isVisible?: boolean; 
		isDescriptionMandatory?: boolean; 
		descriptionLengthMin?: number; 
		descriptionLengthMax?: number; 
		sorting?: number; 
		status?: number; 
		operator?: string; 
		updateTime?: string; 
		createTime?: string; 
	}
	
	interface AuditParam {
		operator?: string; 
	}
	
	interface ListReportReasonsRequest {
		region?: string; 
		reasonIds?: string[]; 
		isVisible?: boolean; 
		isDescriptionMandatory?: boolean; 
		statusList?: number[]; 
		reasonType?: number; 
	}
	
	interface ListReportReasonsResponse {
		debugMsg?: string; 
		reportReasons?: ReportReason[]; 
		versionToken?: string; 
	}
	
	interface AddReportReasonRequest {
		auditParam?: AuditParam; 
		reportReason?: ReportReason; 
		versionToken?: string; 
	}
	
	interface AddReportReasonResponse {
		debugMsg?: string; 
	}
	
	interface BatchUpdateReportReasonsRequest {
		auditParam?: AuditParam; 
		reportReasons?: ReportReason[]; 
		versionToken?: string; 
	}
	
	interface BatchUpdateReportReasonsResponse {
		debugMsg?: string; 
	}
	
	interface DeleteReportReasonRequest {
		auditParam?: AuditParam; 
		reportReasonId?: string; 
		region?: string; 
		versionToken?: string; 
	}
	
	interface DeleteReportReasonResponse {
		debugMsg?: string; 
	}
	
	interface ReportItemRequest {
		itemId?: string; 
		shopId?: string; 
		region?: string; 
		reporterId?: string; 
		reasonId?: string; 
		description?: string; 
	}
	
	interface ReportItemResponse {
		debugMsg?: string; 
	}
}
