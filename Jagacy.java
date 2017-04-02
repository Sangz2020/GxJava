
import java.io.IOException;
import java.util.Enumeration;

import com.jagacy.Field;
import com.jagacy.Key;
import com.jagacy.Session3270;
import com.jagacy.util.JagacyException;
import com.jagacy.util.JagacyProperties;


public class Jagacy {
	
	protected Session3270 session;
	private JagacyProperties props;
	protected final static String SESSION_NAME = "jagacyPlugIn";
	protected final static String HOST_PROP_NAME = "jagacy.host";
	protected final static String HOST_CONTEXT_NAME = "jagacyHost";
	protected String host ="mcfl1g05.medco.com";
	protected Boolean visible = true;

	public Jagacy() {}
	
	public void setUpSession() {
	    System.setProperty(SESSION_NAME+".window", true+"");
	    try{
	        if (isStringNotNull("mcfl1g05.medco.com")) {
	            System.setProperty(HOST_PROP_NAME, "mcfl1g05.medco.com");
	        }
	        session = new Session3270(SESSION_NAME);
	    }catch (JagacyException je){
	        throw new RuntimeException("Could not set up Session3270", je);
	    }
	   
	}

	public void startApplication() {
	    if (isStringNotNull("mcfl1g05.medco.com")) {
	        try{
	            session.open();
	        }catch(JagacyException je){
	            throw new RuntimeException("Could not connect to host '"+host+"'",je );
	        }
	    }else{
	        throw new RuntimeException("'host' is a required attribute when beginSession is true!");
	    }
	}
	/*public String getHost(){
	    if (host == null || host.trim().length() == 0) {
	        host = ContextHelper.getVariableAsString(context, HOST_CONTEXT_NAME);
	    }
	    return host;
	}*/

	public Session3270 getSession3270(){
	    return session;
	}

	/***
	 * @jameleon.attribute
	 */
	public void setHost(String host){
	    this.host = host;
	}

/*
	public Boolean getVisible(){
	    String val = Configurator.getInstance().getValue("jagacy-plugin.visible");
	    if (isStringNotNull(val)) {
	        visible = new Boolean(val);
	    }else{
	        visible = new Boolean(false);
	    }
	    return visible;
	}
*/
	/***
	 * @jameleon.attribute
	 */
	public void setVisible(boolean visible){
	    this.visible = new Boolean(visible);
	}


	protected void tearDownSession(){
	    if (session != null) {
	        try {
	            session.close();
	        } catch (JagacyException e) {
	            System.err.println("Trouble closing Session3270 connection");
	            e.printStackTrace();
	        }
	    }
	}

	protected boolean isStringNotNull(String str){
	    boolean isNotNull = false;
	    if (str != null && str.trim().length() > 0 ) {
	        isNotNull = true;
	    }
	    return isNotNull;
	}

	public static void main(String[] args) throws JagacyException, IOException {
		Jagacy jag = new Jagacy();
		jag.setUpSession();
		jag.startApplication();
	}

}
