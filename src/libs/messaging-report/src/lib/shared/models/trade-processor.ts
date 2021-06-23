




/**
* FIX message object.
* 17 - execId
* 48 - securityId
* 22 - securityIdSource
* 1 - account
* 32 - lastShares (positive int)
* 6 - avgPx (positive double)
* 8 - side (BUY, SELL)
*/
export class Message {
	String getString(int tag);
	Double getDouble(int tag);
	Integer getInt(int tag);
}

