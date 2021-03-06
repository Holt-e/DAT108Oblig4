import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;


@WebServlet(name = "Paamelding", urlPatterns = "/paamelding")
public class Paamelding extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @EJB
    private BrukerEAO brukerEAO;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        paamelingsObjekt skjema = new paamelingsObjekt(request);

        if(skjema.isAllInputGyldig()){
            Bruker Bruker = new Bruker(request);
            brukerEAO.leggTilbruker(Bruker);
            HttpSession sesjon = request.getSession(false);
            if(sesjon != null) {
                sesjon.invalidate();
            }
            sesjon = request.getSession(true);
            sesjon.setMaxInactiveInterval(100000);

            sesjon.setAttribute("bruker", Bruker);

            sesjon.setAttribute("fornavn", Bruker.getFornavn());
            sesjon.setAttribute("etternavn", Bruker.getEtternavn());
            sesjon.setAttribute("mobil", Bruker.getMobil());
            sesjon.setAttribute("kjonn", Bruker.getKjonn());

            response.sendRedirect("paameldingsBekreftelse");
        }else{
            skjema.settOppFeilmeldinger();
            request.getSession().setAttribute("skjema", skjema);
            response.sendRedirect("paamelding");
        }


    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getRequestDispatcher("WEB-INF/Paamelding.jsp").forward(request, response);
    }
}
