package org.uberfire.client.context;

import java.io.IOException;
import javax.servlet.FilterConfig;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.picketlink.authentication.web.HTTPAuthenticationScheme;
import org.picketlink.credential.DefaultLoginCredentials;

public class NoAuthenticationScheme implements HTTPAuthenticationScheme {

    @Override
    public void initialize( FilterConfig filterConfig ) {

    }

    @Override
    public void extractCredential( HttpServletRequest httpServletRequest,
                                   DefaultLoginCredentials defaultLoginCredentials ) {

    }

    @Override
    public void challengeClient( HttpServletRequest httpServletRequest,
                                 HttpServletResponse httpServletResponse ) throws IOException {

    }

    @Override
    public boolean postAuthentication( HttpServletRequest httpServletRequest,
                                       HttpServletResponse httpServletResponse ) throws IOException {
        return true;
    }

    @Override
    public boolean isProtected( HttpServletRequest httpServletRequest ) {
        return false;
    }
}
