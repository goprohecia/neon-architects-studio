-- Security fixes: tighten cdc-attachments storage policies + add realtime RLS

DROP POLICY IF EXISTS "Users can upload CDC attachments" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete own CDC attachments" ON storage.objects;

CREATE POLICY "Admins can upload cdc attachments"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'cdc-attachments'
  AND public.has_role(auth.uid(), 'admin'::public.app_role)
);

CREATE POLICY "Clients can upload own cdc attachments"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'cdc-attachments'
  AND (storage.foldername(name))[1] IN (
    SELECT d.id::text FROM public.demandes d
    JOIN public.clients cl ON d.client_id = cl.id
    WHERE cl.user_id = auth.uid()
  )
);

CREATE POLICY "Admins can delete cdc attachments"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'cdc-attachments'
  AND public.has_role(auth.uid(), 'admin'::public.app_role)
);

CREATE POLICY "Clients can delete own cdc attachments"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'cdc-attachments'
  AND (storage.foldername(name))[1] IN (
    SELECT d.id::text FROM public.demandes d
    JOIN public.clients cl ON d.client_id = cl.id
    WHERE cl.user_id = auth.uid()
  )
);

ALTER TABLE realtime.messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Authenticated users can receive realtime messages" ON realtime.messages;
CREATE POLICY "Authenticated users can receive realtime messages"
ON realtime.messages FOR SELECT
TO authenticated
USING (true);
