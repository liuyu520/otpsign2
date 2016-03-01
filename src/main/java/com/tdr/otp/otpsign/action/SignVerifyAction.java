package com.tdr.otp.otpsign.action;

import com.opensymphony.xwork2.ActionSupport;
import com.tdr.mbs.utils.common.StringUtil;

public class SignVerifyAction extends ActionSupport {

	private static final long serialVersionUID = -8322179415481458379L;
	private String otp;
	private String email;
	private boolean success;
	@Override
	public String execute() throws Exception {
		System.out.println("otp:"+otp);
		System.out.println("email:"+email);
		if(StringUtil.isNullOrEmpty(otp)||StringUtil.isNullOrEmpty(email)){
			success=false;
		}else if(otp.equals("1")) {
			success=true;
		}
		System.out.println("success:"+success);
		return SUCCESS;
	}
	public String getOtp() {
		return otp;
	}
	public void setOtp(String otp) {
		this.otp = otp;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	
}
