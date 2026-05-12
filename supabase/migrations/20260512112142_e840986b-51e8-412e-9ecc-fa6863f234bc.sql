
-- Restrict all policies on sensitive tables to authenticated role only (block anon)

-- clients
DROP POLICY "Admins can delete clients" ON public.clients;
DROP POLICY "Admins can insert clients" ON public.clients;
DROP POLICY "Admins can update clients" ON public.clients;
DROP POLICY "Admins can view all clients" ON public.clients;
DROP POLICY "Clients can update own record" ON public.clients;
DROP POLICY "Clients can view own record" ON public.clients;

CREATE POLICY "Admins can delete clients" ON public.clients FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can insert clients" ON public.clients FOR INSERT TO authenticated WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update clients" ON public.clients FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can view all clients" ON public.clients FOR SELECT TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Clients can update own record" ON public.clients FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Clients can view own record" ON public.clients FOR SELECT TO authenticated USING (auth.uid() = user_id);

-- factures
DROP POLICY "Admins can delete factures" ON public.factures;
DROP POLICY "Admins can insert factures" ON public.factures;
DROP POLICY "Admins can update factures" ON public.factures;
DROP POLICY "Admins can view all factures" ON public.factures;
DROP POLICY "Clients can view own factures" ON public.factures;

CREATE POLICY "Admins can delete factures" ON public.factures FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can insert factures" ON public.factures FOR INSERT TO authenticated WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update factures" ON public.factures FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can view all factures" ON public.factures FOR SELECT TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Clients can view own factures" ON public.factures FOR SELECT TO authenticated USING (client_id IN (SELECT id FROM public.clients WHERE user_id = auth.uid()));

-- tickets
DROP POLICY "Admins can delete tickets" ON public.tickets;
DROP POLICY "Admins can insert tickets" ON public.tickets;
DROP POLICY "Admins can update tickets" ON public.tickets;
DROP POLICY "Admins can view all tickets" ON public.tickets;
DROP POLICY "Clients can insert own tickets" ON public.tickets;
DROP POLICY "Clients can update own tickets" ON public.tickets;
DROP POLICY "Clients can view own tickets" ON public.tickets;

CREATE POLICY "Admins can delete tickets" ON public.tickets FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can insert tickets" ON public.tickets FOR INSERT TO authenticated WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update tickets" ON public.tickets FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can view all tickets" ON public.tickets FOR SELECT TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Clients can insert own tickets" ON public.tickets FOR INSERT TO authenticated WITH CHECK (client_id IN (SELECT id FROM public.clients WHERE user_id = auth.uid()));
CREATE POLICY "Clients can update own tickets" ON public.tickets FOR UPDATE TO authenticated USING (client_id IN (SELECT id FROM public.clients WHERE user_id = auth.uid()));
CREATE POLICY "Clients can view own tickets" ON public.tickets FOR SELECT TO authenticated USING (client_id IN (SELECT id FROM public.clients WHERE user_id = auth.uid()));

-- ticket_messages
DROP POLICY "Admins can insert ticket_messages" ON public.ticket_messages;
DROP POLICY "Admins can view all ticket_messages" ON public.ticket_messages;
DROP POLICY "Clients can insert own ticket_messages" ON public.ticket_messages;
DROP POLICY "Clients can view own ticket_messages" ON public.ticket_messages;

CREATE POLICY "Admins can insert ticket_messages" ON public.ticket_messages FOR INSERT TO authenticated WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can view all ticket_messages" ON public.ticket_messages FOR SELECT TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Clients can insert own ticket_messages" ON public.ticket_messages FOR INSERT TO authenticated WITH CHECK (ticket_id IN (SELECT t.id FROM public.tickets t JOIN public.clients cl ON t.client_id = cl.id WHERE cl.user_id = auth.uid()));
CREATE POLICY "Clients can view own ticket_messages" ON public.ticket_messages FOR SELECT TO authenticated USING (ticket_id IN (SELECT t.id FROM public.tickets t JOIN public.clients cl ON t.client_id = cl.id WHERE cl.user_id = auth.uid()));
